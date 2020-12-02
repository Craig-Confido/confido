import Cosmic from 'cosmicjs'
// import config from '~/config/config'
// import axios from 'axios'
const api = Cosmic()
const bucket = api.bucket({
  slug: "confido",
  read_key: "0O6acZ2ATKQSdKr8rLb5b489Kxg4yNPQRvVii3KCL8T8atx3gn",
//   write_key: config.bucket.write_key
})

// function getGlobals () {
//     const params = {
//       type_slug: 'globals'
//     }
//     return bucket.getObjectsByType(params);
// }

// function getPages () {
//   const params = {
//     type_slug: 'pages'
//   };
//   return bucket.getObjectsByType(params);
// }

function getBlogs () {
  const params = {
    type_slug: 'posts'
  };
  return bucket.getObjectsByType(params);
}

// function getSearchData(){
//   return bucket.getObjects();
// }

// async function contactForm(data, contact) {
//   if (!config.env.SENDGRID_FUNCTION_ENDPOINT) {
//     return {
//       status: false,
//       message: "You must add a SendGrid Function Endpoint URL.  Contact your developer to add this value."
//     }
//   } else {
//     try {
//       var message = 'Name:<br>' + data.name + '<br><br>' +
//       'Subject:<br>' + contact.subject + '<br><br>' +
//       'Message:<br>' + data.message + '<br><br>'
//       var email_data = {
//         from: data.email,
//         to: contact.to,
//         subject: data.name + ' sent you a new message',
//         text_body: message,
//         html_body: message
//       }
//       const url = config.env.SENDGRID_FUNCTION_ENDPOINT
//       await axios.post(url, email_data)
//       saveForm(data)
//       return {
//         status: true,
//         message: 'Success.'
//       }
//     } catch(error) {
//       console.log(error)
//       return {
//         status: false,
//         message: "You must add a SendGrid Function Endpoint URL.  Contact your developer to add this value."
//       }
//     }
//   }

//   async function saveForm(data) {
//     //Send to Cosmic
//     const params = {
//       type_slug: 'form-submissions',
//       title: data.name,
//       content: data.message,

//       metafields: [{
//           title: 'Email',
//           key: 'email',
//           type: 'text',
//           value: data.email
//         },
//         {
//           title: 'Phone',
//           key: 'phone',
//           type: 'text',
//           value: data.phone
//         }
//       ]
//     }
//     // Write to Cosmic Bucket (Optional)
//     const response = await bucket.addObject(params)
//   }
// }

// export default {getGlobals,getPages,getBlogs,getSearchData,contactForm}
export default {getBlogs}
