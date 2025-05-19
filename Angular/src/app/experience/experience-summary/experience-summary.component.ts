import { Component, inject, input, OnInit } from '@angular/core';
import { Experience } from '../experience.model';
import { ExperienceService } from '../experience.service';
import { ConvertToPeriod, TimeDiff } from '../../shared/date.util';

@Component({
  selector: 'app-experience-summary',
  imports: [],
  templateUrl: './experience-summary.component.html',
  styleUrl: './experience-summary.component.css'
})

export class ExperienceSummaryComponent implements OnInit{
  private experienceService = inject(ExperienceService);

  experienceBackend: number = 0;
  experienceFrontend: number = 0;
  experienceWeb: number = 0;

  backendSkills = ["ASP.NET", "C#", "Java", "Node"];
  frontendSkills = ["React", "Angular", "Vue"];
  webSkills = ["HTML", "CSS, JavaScript"];
  devopsSkills = ["Terraform", "DevOps", "Docker"];
  softSkills = ["SCRUM", "Agile"];

  skills:{name: string, count: number}[] = [];
  skilledIn = '';
  confortableIn = '';

  ngOnInit(): void {
    const YearsToBeConsideredSkilled = 3;

    this.experienceService.loadedExperiences().forEach((experience) =>{
      experience.projects.forEach((project) =>{
        const end = new Date(project.end).getTime() == new Date("1111-01-01").getTime() ? new Date() : project.end
        var diff = TimeDiff(project.start, end);

        if(project.skills.some((p) => this.backendSkills.includes(p) )){
          this.experienceBackend +=  diff
        }
        if(project.skills.some((p) => this.frontendSkills.includes(p) )){
          this.experienceFrontend += diff
        }
        if(project.skills.some((p) => this.webSkills.includes(p) )){
          this.experienceWeb += diff
        }


        project.skills.forEach((skill) =>{
          if(this.skills.some((s) => s.name == skill ) ){
            let clone = this.skills.find((s) => s.name == skill)
            clone!.count = clone!.count + diff;
          }else{
            this.skills.push({name: skill, count: diff})
          }
        })
      });
    });

    this.skills.forEach(element => {
      if(ConvertToPeriod(element!.count).year > YearsToBeConsideredSkilled){
        this.skilledIn += element.name + ', '
      }
      else{
        this.confortableIn += element.name + ', '
      }
    });

    if(this.skilledIn.slice(this.skilledIn.length-2, this.skilledIn.length-1) == ',')
      this.skilledIn = this.skilledIn.slice(0, this.skilledIn.length-2);
    if(this.confortableIn.slice(this.confortableIn.length-2, this.confortableIn.length-1) == ',')
      this.confortableIn = this.confortableIn.slice(0, this.confortableIn.length-2);
  }

  YearsOfExperience = (timestamp: number) =>{
    return ConvertToPeriod(timestamp)?.year;
  }
}
