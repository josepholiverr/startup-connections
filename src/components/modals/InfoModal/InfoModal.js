import React from "react";
import { MAX_MISTAKES } from "../../../lib/constants";
import { Info } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import BaseModal from "../BaseModal";

function InfoModal() {
  return (
    <BaseModal
      title=""
      trigger={<Info className="mr-4" />}
      initiallyOpen={false}
      actionButtonText="Got It!"
    >
      <Tabs defaultValue="how-to-play">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="how-to-play">How To Play</TabsTrigger>
          <TabsTrigger value="about-us">About Us</TabsTrigger>
        </TabsList>
        <TabsContent value="how-to-play">
          {" "}

          <h2 className="font-bold mt-4">Find groups of four items that share something in common.</h2>
          <ul style={{ listStyleType: 'disc' }}>
            <li className="ml-4">Select four items and tap 'Submit' to check if your guess is correct.</li>
            <li className="ml-4">Find the groups without making 4 mistakes!</li>
          </ul>
          <h2 className="font-bold mt-4">Find groups of four items that share something in common.</h2>
          <ul style={{ listStyleType: 'disc' }}>
            <li className="ml-4">Select four items and tap 'Submit' to check if your guess is correct.</li>
            <li className="ml-4">Find the groups without making 4 mistakes!</li>
          </ul>
          <p className="mt-4">Each group is assigned a color, which will be revealed as you solve: </p>

          <div class="flex flex-col help-emojis mt-0.5 ml-4">
            <div class="inline-flex items-center h-5">
              <span className="help-emoji group-0 font-bold"></span> Straightforward
            </div>
            <div class="inline-flex items-center h-5">
              <span className="help-emoji group-1"></span>
            </div>
            <div class="inline-flex items-center h-5">
              <span className="help-emoji group-2"></span>
            </div>
            <div class="relative inline-flex items-center h-5">
              <img
                id="help-arrow"
                class="h-[2.2rem] left-[1.5rem] bottom-[1.4rem] absolute"
                src="https://www.nytimes.com/games-assets/v2/metadata/help_arrow.svg"
                alt="levels description arrow"
              />
              <span className="help-emoji group-3 font-bold"></span> Tricky
            </div>
          </div>

        </TabsContent>
        <TabsContent value="about-us">
          {" "}
          
                This project is brought to you by andcomputers, feel free to
                subscribe to our writing and other experiments.{" "}
                <a
                  href="https://andcomputers.io/"
                  target="_blank"
                  className="underline font-bold"
                >
                  Check out our writing here.
                </a>
           
           
                <p className="mb-1">If you'd like to support feel free!</p>
                <ul className="list-disc">
                  <li>
                    <p>Help us make an upcoming puzzle by </p>
                    <a
                      href="mailto:jcp@mail.andcomputers.io"
                      target="_blank"
                      className="underline font-bold"
                    >
                      emailing the team.
                    </a>
                  </li>
                  <li>
                    <p className="mt-2 mb-1">Help us pay for servers & time:</p>
                    <ul>
                      <li>
                        {" "}
                        - One-time contribution via{" "}
                        <a
                          href="https://donate.stripe.com/6oEeXQ8TW6xZfks7ss"
                          target="_blank"
                          className="underline font-bold"
                        >
                          Stripe.
                        </a>
                      </li>
                      <li>
                        {" "}
                        - Recurring contributions via{" "}
                        <a
                          href="https://www.patreon.com/andcomputers"
                          target="_blank"
                          className="underline font-bold"
                        >
                          Patreon.
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
           
                <div className="grid grid-flow-row">
                  <p>Just a few! </p>
                  <a
                    href="https://andcomputers.io/"
                    target="_blank"
                    className="underline font-bold"
                  >
                    - Our writing and thoughts are here.
                  </a>
                  <a
                    href="https://blacktwitter.io/"
                    target="_blank"
                    className="underline font-bold"
                  >
                    - BlackTwitter
                  </a>
                  <a
                    href="https://blackwords.andcomputers.io/"
                    target="_blank"
                    className="underline font-bold"
                  >
                    - Black Wordle
                  </a>
                </div>
             
        </TabsContent>
      </Tabs>
    </BaseModal>
  );
}

export default InfoModal;
