import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-registerpage',
  imports: [FormsModule,RouterModule,CommonModule],
  templateUrl: './registerpage.html',
  styleUrl: './registerpage.css',
})
export class Registerpage implements OnInit{
  
  ngOnInit(): void {
    
  }
  // USER TYPE
  userType: 'athlete' | 'employee' = 'athlete';

  // BASIC INFO
  username = '';
  password = '';
  firstName = '';
  lastName = '';
  phone = '';
  email = '';

  // IMAGE
  selectedFile: File | null = null;
  avatarGenerated: boolean = false;
  profileImageUrl: string | null = null;

  // SPORTS
  sportsList: string[] = [
    'Football',
    'Basketball',
    'Tennis',
    'Swimming',
    'Running',
    'Volleyball',
    'Gym',
    'Cycling'
  ];

  selectedSports: string[] = [];

  // EMPLOYEE DATA
  facilityName = '';
  address = '';
  mb = '';   // 8 digits
  pib = '';  // 9 digits

  // -----------------------------
  // FILE HANDLING
  // -----------------------------
  onFileSelected(event: any): void {
    
    const file: File = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Only image files are allowed.');
      return;
    }

    this.selectedFile = file;
    this.avatarGenerated = false;

    // preview (optional)
    const reader = new FileReader();
    reader.onload = () => {
      this.profileImageUrl = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  // -----------------------------
  // AVATAR GENERATION (placeholder)
  // -----------------------------
  generateAvatar(): void {
    // Simple placeholder logic (replace with real API later)
    const seed = this.username || 'user';
    this.profileImageUrl = `https://api.dicebear.com/7.x/initials/svg?seed=${seed}`;

    this.selectedFile = null;
    this.avatarGenerated = true;
  }

  // -----------------------------
  // VALIDATION HELPERS
  // -----------------------------
  private isValidMB(): boolean {
    return /^\d{8}$/.test(this.mb);
  }

  private isValidPIB(): boolean {
    return /^[1-9][0-9]{8}$/.test(this.pib);
  }

  private isValidEmail(): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
  }

  private validateSports(): boolean {
    return this.selectedSports.length <= 5;
  }

  // -----------------------------
  // SUBMIT
  // -----------------------------
  register(): void {

    // BASIC VALIDATION
    if (!this.username || !this.password || !this.email) {
      alert('Please fill all required fields.');
      return;
    }

    if (!this.isValidEmail()) {
      alert('Invalid email format.');
      return;
    }

    if (!this.validateSports()) {
      alert('You can select maximum 5 sports.');
      return;
    }

    // EMPLOYEE VALIDATION
    if (this.userType === 'employee') {
      if (!this.isValidMB()) {
        alert('MB must contain exactly 8 digits.');
        return;
      }

      if (!this.isValidPIB()) {
        alert('PIB must contain 9 digits and cannot start with 0.');
        return;
      }
    }

    // DEFAULT IMAGE RULE
    const finalImage =
      this.profileImageUrl || 'assets/default-profile.png';

    // BUILD REGISTRATION REQUEST
    const request = {
      userType: this.userType,

      username: this.username,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phone,
      email: this.email,

      profileImage: finalImage,
      sports: this.selectedSports,

      employeeData: this.userType === 'employee'
        ? {
            facilityName: this.facilityName,
            address: this.address,
            mb: this.mb,
            pib: this.pib
          }
        : null,

      status: 'PENDING_APPROVAL'
    };

    console.log('Registration request:', request);

    // TODO: send to backend service
    // this.authService.register(request).subscribe(...)
    alert('Registration request sent for admin approval.');
  }
}
