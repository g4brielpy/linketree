import { Title1 } from "../../components/Title1";
import { CustomLink } from "../../components/CustomLink";
import { FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";

export function Home() {
  return (
    <>
      <main className="container mx-auto p-4 mt-20 text-center">
        <Title1>LinkeTree Gabriel</Title1>
        <section className="max-w-2xl mx-auto">
          <p className="text-white my-6">Veja meus links abaixo 👇🏽</p>
          <nav className="flex flex-col gap-4">
            <CustomLink>Meu canal do YouTube</CustomLink>
            <CustomLink>Meu canal do WhatsApp</CustomLink>
          </nav>
        </section>
      </main>

      <footer className="mx-auto p-4 mt-20 text-center ">
        <nav className="flex justify-center gap-4">
          <a
            href="https://www.instagram.com/gabrielguilhermecosta/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={32} color="#FFF" />
          </a>
          <a
            href="https://www.facebook.com/gabrielguilhermecosta/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={32} color="#FFF" />
          </a>
          <a
            href="https://www.youtube.com/@gabrielguilhermecosta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={32} color="#FFF" />
          </a>
        </nav>
      </footer>
    </>
  );
}
