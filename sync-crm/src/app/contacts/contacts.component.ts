import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class ContactsComponent {
  contactForm: FormGroup;
  contacts: { name: string; email: string; phone: string; company: string }[] = [];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: [''],
      email: [''],
      phone: [''],
      company: ['']
    });
  }

  addContact(): void {
    const newContact = this.contactForm.value;
    this.contacts.push(newContact);
    this.contactForm.reset();
  }

  deleteContact(index: number): void {
    this.contacts.splice(index, 1);
  }

  editContact(index: number): void {
    const contact = this.contacts[index];
    this.contactForm.setValue({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      company: contact.company
    });
    this.deleteContact(index);
  }
}