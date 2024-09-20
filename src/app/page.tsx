import {
  Cpu,
  Code,
  GraduationCap,
  Globe,
  Users,
  // Facebook,
  // Twitter,
  Linkedin,
  // Instagram,
  Github,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-900 to-blue-800 text-white">
      <header className="p-6 flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <GraduationCap
            className="h-8 w-8 text-yellow-400"
            aria-hidden="true"
          />
          <h1 className="text-2xl font-bold">Kinet Systems Education</h1>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Empowering Future Tech Leaders
        </h2>
        <p className="text-xl mb-12 max-w-2xl">
          Get ready to dive into the world of cutting-edge technology with Kinet
          Systems Education. Our expert-led courses are designed to equip you
          with the skills needed for tomorrow&apos;s tech landscape.
        </p>

        <section id="courses" className="w-full max-w-4xl mb-12">
          <h3 className="text-3xl font-semibold mb-8">Our Upcoming Courses</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="bg-white/10 rounded-lg p-6 flex flex-col items-center">
              <Globe
                className="h-16 w-16 text-yellow-400 mb-4"
                aria-hidden="true"
              />
              <h4 className="text-2xl font-semibold mb-2">Online Learning</h4>
              <p className="text-lg">
                Access our courses from anywhere in the world. Learn at your own
                pace with our interactive online platform.
              </p>
            </article>
            <article className="bg-white/10 rounded-lg p-6 flex flex-col items-center">
              <Users
                className="h-16 w-16 text-yellow-400 mb-4"
                aria-hidden="true"
              />
              <h4 className="text-2xl font-semibold mb-2">In-Person Classes</h4>
              <p className="text-lg">
                Join us for immersive, hands-on learning experiences at our
                state-of-the-art facilities.
              </p>
            </article>
          </div>
        </section>

        <section id="about" className="w-full max-w-4xl mb-12">
          <h3 className="text-3xl font-semibold mb-8">
            Why Choose Kinet Systems Education?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <Code
                className="h-8 w-8 text-yellow-400 flex-shrink-0"
                aria-hidden="true"
              />
              <div className="text-left">
                <h4 className="text-xl font-semibold mb-2">
                  Cutting-edge Curriculum
                </h4>
                <p>
                  Stay ahead with courses designed around the latest tech trends
                  and industry demands.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Cpu
                className="h-8 w-8 text-yellow-400 flex-shrink-0"
                aria-hidden="true"
              />
              <div className="text-left">
                <h4 className="text-xl font-semibold mb-2">
                  Hands-on Experience
                </h4>
                <p>
                  Gain practical skills with our project-based learning approach
                  and industry-standard tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="bg-white/10 rounded-lg p-6 w-full max-w-2xl"
        >
          <h3 className="text-2xl font-bold mb-4">Get Ready for Launch</h3>
          <p className="text-lg mb-4">
            We&apos;re excited to bring you a revolutionary tech education
            experience. Our courses are designed to bridge the gap between
            theory and real-world application, preparing you for the dynamic
            tech industry.
          </p>
          <p className="text-lg">
            Follow us on social media for the latest updates on our course
            offerings and launch date. We can&apos;t wait to embark on this
            learning journey with you!
          </p>
        </section>
      </main>

      <footer className="p-6 flex flex-col items-center justify-center bg-indigo-950">
        <nav className="flex space-x-6 mb-4">
          {/* <a
            href="https://facebook.com/kinetsystems"
            className="hover:text-yellow-400 transition-colors"
            aria-label="Follow us on Facebook"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://twitter.com/kinetsystems"
            className="hover:text-yellow-400 transition-colors"
            aria-label="Follow us on Twitter"
          >
            <Twitter size={24} />
          </a> */}
          <a
            href="https://linkedin.com/company/kinetsystems"
            className="hover:text-yellow-400 transition-colors"
            aria-label="Connect with us on LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          {/* <a
            href="https://instagram.com/kinetsystems"
            className="hover:text-yellow-400 transition-colors"
            aria-label="Follow us on Instagram"
          >
            <Instagram size={24} />
          </a> */}
          <a
            href="https://github.com/kinetsystems"
            className="hover:text-yellow-400 transition-colors"
            aria-label="Connect with us on LinkedIn"
          >
            <Github size={24} />
          </a>
        </nav>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Kinet Systems Education. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
