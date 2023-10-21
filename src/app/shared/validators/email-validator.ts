import { Validators } from "@angular/forms";

export const emailValidators: Validators[] = [
  Validators.required,
  Validators.email,
  Validators.minLength(5)
]
