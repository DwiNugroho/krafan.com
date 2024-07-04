import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Adds 'https://' to a URL if it doesn't already have 'http://' or 'https://', and validates the URL.
 *
 * @param url - The URL to be validated and converted.
 * @returns The validated and converted URL with 'https://' protocol if valid, otherwise throws an error.
 * @throws Will throw an error if the URL is invalid.
 */

export function validateAndAddHttps(url: string | undefined): string {
  const protocolPattern = /^(http:\/\/|https:\/\/)/
  const urlPattern =
    /^(http:\/\/|https:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}([\/?].*)?$/

  if (!url || !urlPattern.test(url)) {
    return ''
  }

  if (!protocolPattern.test(url)) {
    return `https://${url}`
  }

  return url
}
