/** Birthday Star and its dress-up gift share the existing five-star unlock rule. */
export function birthdayGiftLocked(page:string,stars:readonly string[]):boolean {
 return (page==='finale'||page==='style')&&stars.length<5;
}
