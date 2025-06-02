// Listen for form submission
document.getElementById("ageForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload
  
    const dobInput = document.getElementById("dob").value;
    const resultDiv = document.getElementById("result");
  
    // Check for empty input or future date
    if (!dobInput) {
      resultDiv.innerHTML = "Please enter a valid Date of Birth.";
      return;
    }
  
    const dob = new Date(dobInput);
    const today = new Date();
  
    if (dob > today) {
      resultDiv.innerHTML = "Date of Birth cannot be in the future.";
      return;
    }
  
    // Calculate difference in years, months, and days
    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();
  
    // Adjust negative days
    if (days < 0) {
      months--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }
  
    // Adjust  negative months
    if (months < 0) {
      years--;
      months += 12;
    }
  
    // Display final age result
    resultDiv.innerHTML = `
      You are ${years} years, ${months} months, and ${days} days old.
    `;
  });
  