import { Validators } from "@angular/forms";

export const passwordValidators: Validators[] = [
  Validators.required,
  Validators.minLength(5)
]
