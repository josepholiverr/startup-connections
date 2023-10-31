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

          <h2 className="font-bold mt-4">Find groups of companies that share something in common.</h2>
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
          
                This project is brought to you by Trey Wall and Joseph Oliver.
                {" "}
                <a
                  href="https://andcomputers.io/"
                  target="_blank"
                  className="underline font-bold"
                >
                  Check out our startups.
                </a>
           
           
               
                <ul className="list-disc">
                  <li>
                    <p>Get in touch with us </p>
                    <a
                      href="mailto:twall7@fordham.edu"
                      target="_blank"
                      className="underline font-bold"
                    >
                      here.
                    </a>
                  </li>
                  
                </ul>
           
               
             
        </TabsContent>
      </Tabs>
    </BaseModal>
  );
}

export default InfoModal;
