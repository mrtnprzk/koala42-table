import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cx(...inputs: Array<ClassValue>) {
    return twMerge(clsx(inputs));
}
