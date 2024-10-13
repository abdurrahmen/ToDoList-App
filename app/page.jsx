import CallToAction from "@components/calltoaction";
import Hero from "@components/Hero";
import Hero_section from "@components/Hero_section";
import { Main } from "@components/Main";

export default function Home() {
  
  const section_one = {
    title:'Capture tasks at the speed of thought', discreption:'We’ve spent over a decade refining Todoist to be an extension of your mind. Capture and organize tasks instantly using easy-flowing, natural language.'
  }

  return (
    <Main>
      <Hero />
      <Hero_section {...section_one} />
      <Hero_section {...section_one} />
      <Hero_section {...section_one} />
      <Hero_section {...section_one} />
      <CallToAction />
    </Main>
  )
}