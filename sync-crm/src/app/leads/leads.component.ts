import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css'],
  imports: [CommonModule, ReactiveFormsModule] // ✅ Add ReactiveFormsModule
})
export class LeadsComponent {
  leadForm: FormGroup;
  leads: { name: string; company: string; email: string }[] = [];

  constructor(private fb: FormBuilder) {
    this.leadForm = this.fb.group({
      name: [''],
      company: [''],
      email: ['']
    });
  }

  addLead(): void {
    const newLead = this.leadForm.value;
    this.leads.push(newLead);
    this.leadForm.reset();
  }

  deleteLead(index: number): void {
    this.leads.splice(index, 1);
  }

  editLead(index: number): void {
    const lead = this.leads[index];
    this.leadForm.setValue({
      name: lead.name,
      company: lead.company,
      email: lead.email
    });
    this.deleteLead(index);
  }
}