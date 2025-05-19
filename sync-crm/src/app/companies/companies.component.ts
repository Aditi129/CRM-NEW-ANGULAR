import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class CompaniesComponent {
  companyForm: FormGroup;
  companies: { name: string; industry: string; email: string; contact: string; address: string }[] = [];

  constructor(private fb: FormBuilder) {
    this.companyForm = this.fb.group({
      name: [''],
      industry: [''],
      email: [''],
      contact: [''], // New field
      address: ['']  // New field
    });
  }

  addCompany(): void {
    const newCompany = this.companyForm.value;
    this.companies.push(newCompany);
    this.companyForm.reset();
  }

  deleteCompany(index: number): void {
    this.companies.splice(index, 1);
  }

  editCompany(index: number): void {
    const company = this.companies[index];
    this.companyForm.setValue({
      name: company.name,
      industry: company.industry,
      email: company.email,
      contact: company.contact, // Updated
      address: company.address  // Updated
    });
    this.deleteCompany(index);
  }
}