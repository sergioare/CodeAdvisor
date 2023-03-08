export const imgDefault =[
 'https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg']

export const textProfile=
    {
        h1Advisor:"Join our team of expert advisors and inspire others to achieve their programming potential!",
        h1User: "Empower your programming skills with our comprehensive online classes!",
        
    }


    

// export const basicInfoUser =[
//     {
//         name: "First Name:",
//         value:'FirsName',
//     },
//     {
//         name: "Last Name:",
//         value:'Lastname',

//     }, {
//         name: "Contact:",
//         value:'Contact',

//     }, {
//         name: 'Email:',
//         value:'userEmail',

//     }, {
//         name: "About Me:",
//         value:'About',

//     },

// ]

export const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

//codigo de periodos de tiempo:
export const startTime = 0;
export const endTime = 24;
export const timeSlots = [];

export async function checkIfAdvisor(userId) {
    const response = await fetch('https://code-advisor-back.vercel.app/Admin/User', {
      method: 'GET',
      body: JSON.stringify({ key: 'ANG31' }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    const users = await response.json();
  
    const user = users.find((u) => u.uId === userId);
  
    if (user) {
      return user.statusAdvisor === true;
    }
  
    return false;
  }