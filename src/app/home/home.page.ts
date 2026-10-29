import { Component, } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import {IonHeader, IonToolbar, IonTitle, IonContent,IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonButton,IonFooter,IonImg } from '@ionic/angular';

interface Student {
  id: number;
  name: string;
  gender: string;
  course: string;
  year: number;
  photo: string;
  address: string;
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [NgFor, NgIf, IonHeader, IonToolbar, IonTitle, IonContent,IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonButton, IonFooter, IonImg],
})
export class HomePage {
  
  constructor() {}
  public  studentColor: string = 'light';
  public  selectedIndex: number = -1;  
  public  secondTitle: string = 'Group Laboratory 2 - Student List';
  public  changecolor(kulayko: string, index: number) { 
    this.studentColor = kulayko;
    this.selectedIndex = index;                          

  }

  
  public editingIndex: number = -1;

  private backup: any = null;

  public toggleEdit(index: number) {
    if (this.editingIndex === index) {
      // "Done" was clicked
      const sure = confirm('Are you sure you want to save the changes to ' + this.students[index].name + '?');
      if (!sure) {
   
        this.students[index] = { ...this.backup };
      }
      this.backup = null;
      this.editingIndex = -1;
    } else {
      // "Edit" was clicked: keep a copy of the original details
      this.backup = { ...this.students[index] };
      this.editingIndex = index;
    }
  }

  public updateField(index: number, field: string, ev: any) {
    this.students[index][field] = field === 'year' ? Number(ev.target.value) : ev.target.value;
  }

  public genderFilter: string = 'All';
  public yearFilter: string = 'All';
  public courseFilter: string = 'All';


  public showStudent(i: number): boolean {
    const s = this.students[i];
    return (this.genderFilter === 'All' || s.gender === this.genderFilter)
        && (this.yearFilter === 'All' || String(s.year) === this.yearFilter)
        && (this.courseFilter === 'All' || s.course === this.courseFilter);
  }

  get visibleCount(): number {
    return this.students.filter((s: any, i: number) => this.showStudent(i)).length;
  }

  get years(): number[] {
    return [...new Set<number>(this.students.map((s: any) => s.year))].sort((a, b) => a - b);
  }

  get courses(): string[] {
    return [...new Set<string>(this.students.map((s: any) => s.course))];
  }

  public setFilter(type: string, ev: any) {
    const value = ev.target.value;
    if (type === 'gender') this.genderFilter = value;
    if (type === 'year') this.yearFilter = value;
    if (type === 'course') this.courseFilter = value;
    this.editingIndex = -1; 
  }

  public resetFilters() {
    this.genderFilter = 'All';
    this.yearFilter = 'All';
    this.courseFilter = 'All';
  }

  public students: any = [
{
id: 1,
name: 'Juan Dela Cruz',
gender: 'Male',
course: 'BS Information Technology',
year: 3,
photo: '../../assets/juan.jpg',
address: '123 Main St, Cityville'
},
{
id: 2,
name: 'Maria Santos',
gender: 'Female',
course: 'BS Information Technology',
year: 3,
photo: '../../assets/image.avif',
address: '456 Elm St, Townsville'
},
{
id: 3,
name: 'Carlos Reyes',
gender: 'Male',
course: 'BS Information Technology',
year: 3,
photo: '../../assets/carlos.avif',
address: '789 Oak St, Villagetown'
},
{
id: 4,
name: 'Angela Garcia',
gender: 'Female',
course: 'BS Information Technology',
year: 3,
photo: '../../assets/images.jpg',
address: '321 Pine St, Hamletville'
},
{
id: 5,
name: 'Mark Villanueva',
gender: 'Male',
course: 'BS Information Technology',
year: 3,
photo: '../../assets/mark.jpg',
address: '654 Maple St, Boroughville'
},
{
id: 6,
name: 'Sofia Mendoza',
gender: 'Female',
course: 'BS Information Technology',
year: 3,
photo: '../../assets/sofia.jpg',
address: '987 Cedar St, Metropolis'
},
{
id: 7,
name: 'Daniel Bautista',
gender: 'Male',
course: 'BS Information Technology',
year: 3,
photo: '../../assets/daniel.jpg',
address: '159 Birch St, Capital City'
},
{
id: 8,
name: 'Beatrice Navarro',
gender: 'Female',
course: 'BS Information Technology',
year: 3,
photo: '../../assets/bea.jpg',
address: '753 Spruce St, Rivertown'
}
];
}