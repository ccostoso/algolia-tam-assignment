*Question 1*  

 
From: marissa@startup.com  
Subject:  Bad design  

Hello,  
  
Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.  
   
Thanks,  
Marissa  

***My Response:***

Hello Marissa,

Thank you for reaching out—this is exactly the kind of feedback we need to hear to ensure we can provide you with the best possible user experience. I'll take this back to our front-end team and ensure your concerns receive priority.

Please note that our API allows for fast deleting and clearing of multiple indices without needing to use the dashboard at all. Many of our users find that this method is far quicker and less time- and labor-intensive. Feel free to reference our documentation to [here](https://www.algolia.com/doc/guides/sending-and-managing-data/manage-your-indices/how-to/delete-multiple-indices/?client=javascript)--and should you like to schedule a call so I can demo this functionality for you, please let me know.

Thank you again for alerting me to this issue, and feel free to reach out with any questions or concerns!

Best,

Carlos
  
--

*Question 2*:   
  
From: carrie@coffee.com  
Subject: URGENT ISSUE WITH PRODUCTION!!!!  
  
Since today 9:15am we have been seeing a lot of errors on our website. Multiple users have reported that they were unable to publish their feedbacks and that an alert box with "Record is too big, please contact enterprise@algolia.com".  
  
Our website is an imdb like website where users can post reviews of coffee shops online. Along with that we enrich every record with a lot of metadata that is not for search. I am already a paying customer of your service, what else do you need to make your search work?  
  
Please advise on how to fix this. Thanks.   

***My Response:***

Hello Carrie,

Thank you so much for flagging this—we absolutely value your continued patronage and know how essential a functioning search engine is to your business.

For both Standard and Premium plans, Algolia limits the size of individual records to 100KB. We do so to ensure low-latency searching, so your customers can spend less time waiting and more time finding. If your records are reaching this limit, it's likely a signal that we can find ways to optimize and streamline the records being stored on Algolia's servers—and I suspect that the metadata that isn't used for search would be an excellent candidate for trimming.

For more information about this issue, feel free to refer to Algolia's documentation [here](https://www.algolia.com/doc/faq/basics/is-there-a-size-limit-for-my-index-records/).

If you have free time today, let's schedule a call to find out what we can remove to ensure that we don't hit that record limit again in the future.

Thank you again for reaching out—I'm certain we can find a way to avoid this issue going forward.

Best,

Carlos
  
--

*Question 3*:   


From: marc@hotmail.com  
Subject: Error on website  
  
Hi, my website is not working and here's the error:  
  
![error message](./error.png)  
  
Can you fix it please?  

***My Response:***

Hello Marc!

Thank you for reaching out.

It appears as if you're using Searchkit, a similar but different product from Algolia's offerings. Unfortunately, we cannot provide support for Searchkit. Feel free to reach out to them [here](https://searchkit.co/docs) for further resources and documentation.

In the meanwhile, I'm more than happy to provide support for any issues you have with Algolia, and if you'd like to schedule a call for further information, feel free to request a time that works best for you.

Best,

Carlos