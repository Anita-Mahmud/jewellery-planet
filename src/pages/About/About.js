import React from 'react';

const About = () => {
    return (
        <div>
         <img src = "https://cdn.shopify.com/s/files/1/1223/0734/files/shimmer-necklace-set-necklace-sets-blingvine-568153_533x-tinified_360x.jpg?v=1644915842" alt="jewellery" className='w-screen h-[400px]'/>
         <h2 className='font-lobster text-6xl italic text-center my-10'>About Us</h2>
         <div className = 'grid grid-cols-3 gap-4'>
          <div className='col-span-2 py-6'>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p className='mt-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
          </div>
          <div >
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bdb5d196121449.5ea74bf645cc6.gif" alt='jewel'className='-mt-32'/>
          </div>
         </div>
        </div>
    );
};

export default About;