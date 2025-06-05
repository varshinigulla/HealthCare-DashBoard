export const schedule = [
  {
    day: "On Thursday",
    appointments: [
      { 
        title: "Health checkup complete",
        time: "10:00 AM", 
        icon: `${process.env.PUBLIC_URL}/Assests/injection.jpg` 
      },
      { 
        title: "Ophthalmologist", 
        time: "12:00 PM", 
        icon: `${process.env.PUBLIC_URL}/Assests/eye.png` 
      }
    ]
  },
  {
    day: "On Saturday",
    appointments: [
      { 
        title: "Cardiologist", 
        time: "02:00 PM", 
        icon: `${process.env.PUBLIC_URL}/Assests/heart.webp` 
      },
      { 
        title: "Neurologist", 
        time: "04:00 PM", 
        icon: `${process.env.PUBLIC_URL}/Assests/brain.png` 
      }
    ]
  }
];