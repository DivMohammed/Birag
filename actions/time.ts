"use client"
export function getTimeDifference(timestamp: Date): string {
    // Parse the given timestamp string to a Date object
    const givenDate = new Date(timestamp);
    
    // Get the current date and time
    const now = new Date();
    
    // Calculate the difference in years, months, days, hours, minutes, and seconds
    let years = now.getFullYear() - givenDate.getFullYear();
    let months = now.getMonth() - givenDate.getMonth();
    let days = now.getDate() - givenDate.getDate();
    let hours = now.getHours() - givenDate.getHours();
    let minutes = now.getMinutes() - givenDate.getMinutes();
    let seconds = now.getSeconds() - givenDate.getSeconds();
    
    // Adjust for negative values in seconds
    if (seconds < 0) {
      seconds += 60;
      minutes -= 1;
    }
  
    // Adjust for negative values in minutes
    if (minutes < 0) {
      minutes += 60;
      hours -= 1;
    }
  
    // Adjust for negative values in hours
    if (hours < 0) {
      hours += 24;
      days -= 1;
    }
  
    // Adjust for negative values in days
    if (days < 0) {
      const daysInMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
      days += daysInMonth;
      months -= 1;
    }
  
    // Adjust for negative values in months
    if (months < 0) {
      months += 12;
      years -= 1;
    }
  
    // Calculate weeks from days
    const weeks = Math.floor(days / 7);
    const remainingDays = days % 7;
  
    // Construct the result based on non-zero values
    if (years > 0) {
        return `${years} سنة`;
      } else if (months > 0) {
        return `${months} شهر`;
      } else if (weeks > 0) {
        return `${weeks} اسبوع${remainingDays > 0 ? ` و ${remainingDays} يوم` : ''} منذ`;
      } else if (remainingDays > 0) {
        return `${remainingDays} يوم`;
      } else if (hours > 0) {
        return `${hours} ساعة`;
      } else if (minutes > 0) {
        return `${minutes} دقائق`;
      } else {
        return `${seconds} ثواني`;
      }
    
  }