const req = new XMLHttpRequest();
req.open('GET',"./resume.json");
req.send();
req.onload = () => {
    const data = JSON.parse(req.response);
    console.log(data);
}



const resume = 
    
{
    "name": "Arthanarieswara V",
    "contact": {
      "email": "arthanarieswara44@gmail.com",
      "phone": "+91 7708333036",
      "address": "No:53, Ramraj Nagar, Goldwins, Coimbatore.",
      "pincode": "641-014"
    },
    "summary": "Highly motivated and detail-oriented software engineer with over 5 years of experience in full-stack web development. Proficient in JavaScript, HTML, CSS, React, and Node.js. Strong problem-solving skills and ability to work collaboratively in fast-paced environments. Proven track record of delivering high-quality solutions and meeting project deadlines. Excellent communication skills and a passion for continuous learning and growth.",
    "education": [
      {
        "degree": "Bachelor of Science in Computer Science",
        "university": "University COllege of Engineering Panruti",
        "location": "Panruti, Cuddalore",
        "year": "2016 - 2020"
      }
    ],
    "experience": [
      {
        "position": "Customer Support",
        "company": "Crystaldelta Solutions",
        "location": "Chennai, Tamil Nadu.",
        "duration": "2021 - 2023",
        "responsibilities": [
          "Responding to Customer Inquiries:> Addressing customer inquiries, concerns, and complaints via various communication channels such as phone, email, live chat, or social media in a timely and professional manner.",
          "Providing Product or Service Information: Offering detailed information about products or services, including features, specifications, pricing, and availability, to assist customers in making informed purchasing decisions.",
          "Troubleshooting Technical Issues: Diagnosing and resolving technical issues or problems that customers encounter with products, software, or services. This may involve providing step-by-step instructions, troubleshooting guides, or escalating issues to technical support teams if necessary.",
          "Documenting Interactions: Documenting customer interactions, inquiries, feedback, and resolutions accurately and comprehensively in the company's customer relationship management (CRM) system or support ticketing system for future reference and analysis."
        ]
      },
      {
        "position": "Intern",
        "company": "Guidehouse India PVT LTD.",
        "location": "Chennai, Tamil Nadu.",
        "duration": "March 2020 - sept 2022",
        "responsibilities": [
          "Customer Service: Providing excellent customer service to internal and external stakeholders, responding to inquiries and resolving issues promptly and courteously.",
          "Cross-Functional Collaboration: Collaborating with other departments such as sales, customer service, and finance to address customer issues, resolve disputes, and improve overall business performance.",
          "Monitoring and Managing Receivables: Tracking and managing accounts receivable balances, ensuring timely collection of payments from customers, and minimizing outstanding debts."
        ]
      }
    ],
    "skills": [
      "JavaScript",
      "HTML",
      "CSS",
      "React",
      "Node.js",
      "Git",
      "SQL",
      "Agile Methodologies"
    ],
    "languages": [
      "English (Fluent)",
      "Tamil (Fluent)"
    ]
  
};

// 1.Using for loop

for (let key in resume) {
    console.log(`${key}: ${resume[key]}`);
}

// 2.Using for...in loop:

for (let key in resume) {
    console.log(`${key}: ${resume[key]}`);
}


// Using forEach loop (for arrays):
console.log("Education:");
resume.education.forEach(education => {
    console.log(`Degree: ${education.degree}, University: ${education.university}, Year: ${education.year}`);
});


console.log("Experience:");
resume.experience.forEach(experience => {
    console.log(`Position: ${experience.position}, Company: ${experience.company}, Duration: ${experience.duration}`);
});


