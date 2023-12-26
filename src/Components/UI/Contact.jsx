import emailjs, { send } from "@emailjs/browser";
import { useRef } from "react";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ylpx4rg",
        "template_lcqsbnh",
        form.current,
        "oCfX3be4Ry8A3DO7A"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="pb-16">
      <div className="container">
        <h2 className="text-headingColor font-[700] items-center justify-center flex text-[2.5rem] mb-8 mt-12">
          به راحتی من را پیدا کن
        </h2>
        <div className="md:flex justify-between items-center ">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3409.599346171757!2d51.37114683090561!3d35.64063650528207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sfr!4v1703090557005!5m2!1sen!2sfr"
              title="google-maps"
              loading="lazy"
              className="border-0 w-full h-full "
            ></iframe>
          </div>

          <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
            <form ref={form} onSubmit={sendEmail} action="" className="w-full">
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="نام خود را وارد کنید"
                  className="w-full p-3 focus:outline-none rounded-[5px] text-right"
                  name="user_name"
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="ایمیل خود را وارد کنید"
                  className="w-full p-3 focus:outline-none rounded-[5px] text-right"
                  name="user_email"
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="توضیحات"
                  className="w-full p-3 focus:outline-none rounded-[5px] text-right"
                  name="desc"
                />
              </div>
              <div className="mb-5">
                <textarea
                  type="text"
                  rows={3}
                  placeholder="متن خود را بنویسید"
                  className="w-full p-3 focus:outline-none rounded-[5px] text-right"
                  name="detail"
                />
              </div>
              <button
                type="submit"
                value={send}
                className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150"
              >
                ارسال پیام
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
