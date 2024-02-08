const Page = () => {
  return (
    <div className="w-[624px] m-auto flex flex-col gap-7 mb-12 ">
      <p className="text-4xl font-semibold">Contact us</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
        exercitationem quod consectetur illo recusandae assumenda voluptates,
        obcaecati quas temporibus quam pariatur voluptas architecto veritatis
        distinctio, quae a magnam aliquam facilis?
      </p>
      <div className="flex justify-between ">
        <div className="border w-[290px] p-5 rounded-md">
          <p className="text-2xl font-semibold">Address</p>
          <p className="text-[#696A75] text-lg font-normal">
            1328 Oak Ridge Drive, Saint Louis, Missouri
          </p>
        </div>
        <div className="border w-[290px] p-5 rounded-xl">
          <p className="text-2xl font-semibold">Contact</p>
          <p className="text-[#696A75] text-lg font-normal">
            313-332-8662 info@email.com
          </p>
        </div>
      </div>
      <div className="bg-[#F6F6F7] flex flex-col gap-6 py-6 pl-9 pr-[130px] rounded-xl">
        <p className="font-semibold text-[18px]">Leave a message</p>
        <div className="flex justify-between">
          <input
            type="text"
            placeholder="Your name"
            className="h-10 rounded-md"
          />
          <input
            type="text"
            placeholder="Your email"
            className="h-10 rounded-md"
          />
        </div>

        <input type="text" placeholder="Subject" className="h-10 rounded-md" />
        <input
          type="text"
          placeholder="Write a message"
          className="h-[130px] rounded-md flex items-start"
        />
        <button className="self-start text-[14px] bg-[#4B6BFB] px-4 py-2 text-white rounded-lg">
          Send a message
        </button>
      </div>
    </div>
  );
};
export default Page;
