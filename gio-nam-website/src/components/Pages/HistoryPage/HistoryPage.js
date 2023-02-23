import React from "react";
import "./HistoryPage.css";
import Header from "../../PageSections/Header/Header";
import Footer from "../../PageSections/Footer/Footer";
import { ThemeProvider } from "@mui/material";
import theme from "../../../theme";
import { Fieldset } from "primereact/fieldset";
import { Image } from "primereact/image"
import orange_peel from "../../../assets/history-peel.jpg"

export default function HistoryPage() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div className="history-container gio-nam-font">
        <div className="history-hero-banner">
          <h1>History of Lion Dance</h1>
        </div>
        <div className="history-content">
          <div style={{ width: "55%" }}>
            <p>
              Lion dance can trace its origins back more than two thousand years
              ago to ancient China. There are several stories, myths, and
              legends about the origin of the lion and lion dance, depending on
              your country, region, or even village.
            </p>
            <p>
              Nowadays, lion dance is performed year-round for a variety of
              occasions to usher in good luck and prosperity. We perform at many
              events, such as festivals, restaurants, grand openings, weddings,
              parades, banquets, private parties, community service events, and
              many more.
            </p>
            <Fieldset
              legend="The Lion and the Goddess of Mercy (Guan Yin)"
              toggleable
              collapsed
              style={{ marginTop: "4vh", backgroundColor: "#eeeeee" }}
            >
              <p>
                The story of the rebirth of the mythical lion (originating from
                heaven) is probably the most common version of the origin of
                lion dance. The lion created a great deal of trouble for
                everyone with his very mischievious character and fondness for
                practical jokes. On one occasion, he decided to play a practical
                joke on the Jade Emperor. The Jade Empoeror, angry after all the
                trouble that the lion had caused, killed the lion by cutting its
                head off and separating it from its body. He then threw both the
                lion's head and body down to the earth to rot.
              </p>
              <p>
                Upon discovering the fate of the lion, Guan Yin (the goddess of
                mercy) felt sorry for the lion and decided to help him. She used
                a long red ribbon to tie the lion's head back on and bring him
                back to life. The red ribbon is still seen on lions' horns
                today, and both are said to have the ability to ward off evil
                spirits after having being gifted to the lion by Guan Yin for
                this purpose.
              </p>
            </Fieldset>
            <Fieldset
              legend="The Lion and the Nian"
              toggleable
              collapsed
              style={{ marginTop: "4vh", backgroundColor: "#eeeeee" }}
            >
              <p>
                These fabled events of the lion and the Nian took place around
                2697 BC during the reign of the legendary Yellow Emperor. A
                strange creature one day appeared in the Yellow Emperor's
                villages and preyed on both men and beast. The creature's name
                was Nian, which sounds like the Chinese word for "year". It was
                so fast that not even the ox nor tiger could slay it. The people
                turned in despair to the lion for help. Rushing to meet the
                terrible foe, the lion "expanded his chest, raised his mighty
                head, shook his mane", and wounded the creature who "went
                running with his tail between his legs". As the Nian fled, it
                turned and screamed, "Beware! I will return and take my
                revenge!"
              </p>
              <p>
                As promised, the Nian returned a year later, but the lion was
                too busy guarding the emperor's gates to help the village. The
                villagers hurriedly took some bamboo and cloth to make the image
                of the lion. Two men crawled inside and made it run, prance, and
                roar. Faced with this awesome creature, the Nian again turned
                and fled. And so, on the eve of Chinese New Year, lions always
                dance to send menace and evil away for yet another year of luck
                and good tidings.
              </p>
            </Fieldset>
            <Fieldset
              legend="The Emperor and the Dream"
              toggleable
              collapsed
              style={{ marginTop: "4vh", marginBottom: "4vh", backgroundColor: "#eeeeee" }}
            >
              <p>
                One popular belief is that the lion dance finds its roots in the
                Tang Dynasty (AD 618-906). Legend has it that the emperor had a
                strange dream one night. In his dream, an odd creature he had
                never laid eyes on before saved his life and carried him to
                safety. The next day, wondering what this creature was and what
                the dream meant, the emperor described the reverie to his
                ministers. One of the ministers explained that the strange
                creature resembled an animal called a "lion", which did not
                exist in China at the time. The emperor, wanting to see this
                "lion" while awake, ordered them to create a model of it, and
                because of his dream, the lion came to symbolize good luck,
                happiness, and prosperity.
              </p>
            </Fieldset>
            <Image src={orange_peel} alt="Image" width="100%" imageStyle={{borderRadius: "5px"}}/>
          </div>
        </div>
      </div>
      <Footer />
    </ThemeProvider>
  );
}
