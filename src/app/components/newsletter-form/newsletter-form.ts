import { Component, signal } from '@angular/core';
import { BtnPrimary } from "../btn-primary/btn-primary";
import { NewsletterService } from '../services/newsletter.service';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'newsletter-form',
  standalone: true,
  imports: [
    BtnPrimary,
    ReactiveFormsModule,
  ],
  providers: [
    NewsletterService,
  ],
  templateUrl: './newsletter-form.html',
  styleUrls: ['./newsletter-form.scss'] // Corrigido para styleUrls (plural)
})
export class NewsletterForm {
  newsletterForm: FormGroup;
  loading = signal(false);

  constructor(private service: NewsletterService) {
    this.newsletterForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    if (this.newsletterForm.valid) {
      this.loading.set(true);
      const { nome, email } = this.newsletterForm.value;

      this.service.sendData(nome, email).subscribe({
        next: () => {
          this.newsletterForm.reset();
          this.loading.set(false);
        },
        error: () => this.loading.set(false)
      });
    }
  }
}
