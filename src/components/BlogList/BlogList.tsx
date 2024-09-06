import React from "react";
import BlogCard from "../BlogCard/BlogCard";
import "./BlogList.css";
import OwnerProfile from "../../assets/images/AboutUsOwner.png";
import Logo from "../../assets/images/fulllogo.png";
import BDMLogo from "../../assets/images/BDM_Logo_Circle.png";

interface BlogPost {
  image: string;
  title: string;
  subtitle: string;
  link: string;
  body: string;
}

const blogPosts: BlogPost[] = [
  {
    image: BDMLogo,
    title:
      "New Jersey's Got Da Juice selected for Newchip startup accelerator program",
    subtitle: "By Jordan Maxwell in Food & Beverage - Apr 27, 2023",
    link: "/blog/new-jersey-got-da-juice",
    body: `Jersey City-based Got Da Juice has announced it has been accepted into Newchip’s renowned global accelerator program. \n\nNewchip has helped over 2,500 founders from more than 110 countries and 250 cities raise over $2.2 billion in funding, with an estimated portfolio of over $9 billion, according to a statement.\n\n“Being accepted into the Newchip Accelerator is a testament to the hard work and dedication of our team. With access to mentorship, funding, and networking opportunities, we can refine our brand and develop a sustainable plan for scaling our business. We are excited to work alongside our team to leverage the resources provided by Newchip and take our business to the next level,” Kevin Robinson, CEO at Got Da Juice, said in a statement.\n\nFounded in 2021, the cold-press juice company sells a variety of flavours, including classic favourites like Green Magic and Irie Vibez, as well as more exotic options like charcoal lemonade (Black Mamba) and ginger.\n\nGot Da Juice also offers a range of wellness shots and smoothies to help customers meet their health and fitness goals.\n\n“Newchip evaluates a diverse number of companies across all industries from around the world, selecting a small percentage to join our accelerator,” Andrew Ryan, CEO of Newchip, said in a statement. “This strict selection process makes us an ideal partner for investors looking for promising start-ups. Food and beverage companies like Got Da Juice can scale quickly with proper funding and guidance.\n\n"We are excited for Got Da Juice and believe they will do well at Newchip."`,
  },
  {
    image: Logo,
    title:
      "Got Da Juice Chosen for Newchip’s Intensive Global Pre-Seed Accelerator Program",
    subtitle: "A healthy lifestyle juice company...",
    link: "/blog/got-da-juice-chosen",
    body: `JERSEY CITY, N.J., April 27, 2023 (GLOBE NEWSWIRE) -- Got Da Juice, which creates healthy, delicious cold-pressed juices and helps health-conscious individuals who prioritize consuming nutritious and fresh beverages, was accepted into Newchip’s renowned global accelerator program. Designed to provide all the skills and tools founders need to rapidly fund, build, and scale their companies, past accelerator cohorts averaged more than 17.5 times the average funding amount. The equity-free, fully digital accelerator has helped over 2,500 founders from more than 110 countries and 250 cities raise over $2.2 billion in funding, with an estimated portfolio of over $9B.

“Newchip evaluates a diverse number of companies across all industries from around the world, selecting a small percentage to join our accelerator,” says Andrew Ryan, CEO at Newchip. “This strict selection process makes us an ideal partner for investors looking for promising start-ups. Food and beverage companies like Got Da Juice can scale quickly with proper funding and guidance. "We are excited for Got Da Juice and believe they will do well at Newchip.”

“Being accepted into the Newchip Accelerator is a testament to the hard work and dedication of our team." With access to mentorship, funding, and networking opportunities, we can refine our brand and develop a sustainable plan for scaling our business. "We are excited to work alongside our team to leverage the resources provided by Newchip and take our business to the next level,” says Kevin Robinson, CEO at Got Da Juice.

Got Da Juice is a cool and creative cold-press juice company that has quickly gained popularity among shoppers who care about their health. Founded in 2021, the company is committed to using only the freshest, locally sourced ingredients in their juices, which are cold-pressed to retain their maximum nutritional value. Got Da Juice offers a wide variety of flavors with unique names, including classic favorites like Green Magic and Irie Vibez, as well as more exotic options like charcoal lemonade (Black Mamba) and ginger. They also offer a range of wellness shots and smoothies to help customers meet their health and fitness goals. With a focus on quality, sustainability, and customer satisfaction, "Got Da Juice" is more than just a beverage company; it's a community of people who are dedicated to promoting health and wellness for all.

Got Da Juice is poised for continued growth and success in the competitive cold-press juice market. To learn more, visit www.gotdajuicebar.com.

<h3>About Newchip</h3>
Newchip is an online, global startup accelerator led by a world-class team of entrepreneurs and investors. It was designed to provide founders with the tools needed to rapidly fund, build, and scale. Since its inception in 2019, the equity-free, remote accelerator has enabled over 2,500 startups from 50+ countries to raise over $2.2 billion in funding with an estimated $9B portfolio. It has three distinct six-month accelerator programs based on company stage: Pre-Seed, Seed, and Series A. Its vast network of global investors, strategic partners, and mentors guide companies from team building and prototype development to securing high-profile VC investment, corporate partnerships, and everything in-between. To learn more, visit https://launch.newchip.com/.

`,
  },
  {
    image: OwnerProfile,
    title: "Feed The Body Dat Good Stuff! - Got Da Juice",
    subtitle: "Feed The Body Dat Good Stuff - Got Da Juice...",
    link: "/blog/feed-the-body",
    body: `
        <p>Interested in starting your own entrepreneurial journey in food and beverage but unsure what to expect? Then read up on our interview with<span>&nbsp;</span><strong>Kevin Robinson</strong>, CEO of<span>&nbsp;</span><strong>Got Da Juice</strong>, located in Jersey City, NJ, USA.</p>
        <h3 id="whats-your-business-and-who-are-your-customers">What's your business, and who are your customers?</h3>
        <p>Got Da Juice provides good quality and nutritious cold-pressed juices that revitalizes the energy your body demands. We provide delicious juices that not only boost your health but improve your lifestyle. Our customer base is targeted toward newcomers looking for new ways to improve their health and well-being.</p>
        <h3 id="tell-us-about-yourself">Tell us about yourself</h3>
        <p>In the year 2020, I went to my annual physical, where I was told the news that I had very high blood pressure and because of my family's history of diabetes and high blood pressure, my doctor informed me of the risk to my health if I did not change my diet. I knew after that I had to take my health more seriously. I knew the benefits of juicing would improve my overall health. I started the new year doing a 7-day juice cleanse. It was difficult at first, and it became easier as the days went by. I noticed changes in my energy and improvements in my mental clarity and mood, and I also experienced weight loss. Friends started seeing an improvement in my health and asked me what I was doing differently. I let them know I was juicing, and some of them were intrigued by it and wanted to try the juices I made. I received great feedback from them, and one of my friends mentioned that I should start my own juice business, which triggered me to research starting my own business.</p>
        <p>On January 25, 2021, Got Da Juice was created. Three months later, I went to my annual physical, and my doctor informed me that "my numbers were low...." I was confused about what that meant and asked him if that was bad. He then turned around, told me this was great news, and asked me what I had done differently. I told him that I had started juicing more. I then knew that juicing was very beneficial, and I was able to educate others based on my experience. When customers provided me feedback on how my juices improved their health, that showed me that my juices could make a difference in people's lives.</p>
        <h3 id="whats-your-biggest-accomplishment-as-a-business-owner">What's your biggest accomplishment as a business owner?</h3>
        <p>Some people were skeptical of trying my juices because it was something new to them, and since they were healthy, they judged how they would taste. Once they tried the juices, I received great feedback on how fresh and delicious they tasted.</p>
        <h3 id="whats-one-of-the-hardest-things-that-comes-with-being-a-business-owner">What's one of the hardest things that comes with being a business owner?</h3>
        <p>Starting your own business was definitely hard work, dedication, and long hours but it was all worth it when I saw people's reactions and received great feedback.</p>
        <h3 id="what-are-the-top-tips-youd-give-to-anyone-looking-to-start-run-and-grow-a-business-today">What are the top tips you'd give to anyone looking to start, run and grow a business today?</h3>
        <ol>
<li>Put yourself out there- you never know what you're capable of.</li>
<li>Learn from others, find mentors and surround yourself with like-minded people that can help guide you in your journey.</li>
<li>Network, Network, Network!!- This helps with building your confidence, building relationships, gaining knowledge, connecting with other businesses, and helps to establish new opportunities.</li>
</ol>
<h3 id="where-can-people-find-you-and-your-business">Where can people find you and your business?</h3>
<p>Website:<span>&nbsp;</span><a href="https://www.gotdajuice.co/">https://www.gotdajuice.co/</a><br>Facebook:<span>&nbsp;</span><a href="https://www.facebook.com/gotdajuiceco/">https://www.facebook.com/gotdajuiceco/</a><br>Instagram:<span>&nbsp;</span><a href="https://www.instagram.com/gotdajuiceco/">https://www.instagram.com/gotdajuiceco/</a><br>Twitter:<span>&nbsp;</span><a href="https://twitter.com/gotdajuiceco/">https://twitter.com/gotdajuiceco/</a><br>LinkedIn:<span>&nbsp;</span><a href="https://www.linkedin.com/company/got-da-juice/">https://www.linkedin.com/company/got-da-juice/</a></p>
        `,
  },
  // Add more blog posts as needed
];

const BlogList = () => {
  return (
    <div className="blog-list">
      {blogPosts.map((post, index) => (
        <BlogCard
          key={index}
          image={post.image}
          title={post.title}
          subtitle={post.subtitle}
          link={post.link}
          body={post.body}
        />
      ))}
    </div>
  );
};

export default BlogList;
