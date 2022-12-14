
import NewsletterForm from './NewsletterForm';
import MailchimpSubscribe from 'react-mailchimp-subscribe';


const  Newsletter =() => {
 
  const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

  return (
    <>
    <MailchimpSubscribe
      url={ MAILCHIMP_URL }
      render={ ( props ) => {
        const { subscribe, status, message } = props || {};
        return (
          <NewsletterForm
            status={ status }
            message={ message }
            onValidated={ formData => subscribe( formData ) }
          />
        );
      } }
    />
    </>
   
  )
}

export default Newsletter