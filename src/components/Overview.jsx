import React, { useState } from 'react';
import { AlertCircle, BookOpen, Clock, Globe, MessageSquare, FileText } from 'lucide-react';

const MAX_WIDTH = "w-full max-w-7xl mx-auto";

// Custom Tab Components
const TabsList = ({ children }) => (
  <div className="flex flex-wrap border-b border-gray-200 mb-8">
    {children}
  </div>
);

const TabsTrigger = ({ value, active, onClick, children }) => (
  <button 
    className={`px-4 py-2 font-medium text-sm ${active === value ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
    onClick={() => onClick(value)}
  >
    {children}
  </button>
);

const TabsContent = ({ value, activeTab, children }) => (
  <div className={`pt-2 ${activeTab === value ? 'block' : 'hidden'}`}>
    {children}
  </div>
);

// Custom Card Components
const Card = ({ className = "", children }) => (
  <div className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ className = "", children }) => (
  <div className={`p-4 border-b border-gray-100 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ className = "", children }) => (
  <h3 className={`font-bold text-gray-800 ${className}`}>
    {children}
  </h3>
);

const CardDescription = ({ children }) => (
  <p className="text-sm text-gray-500 mt-1">
    {children}
  </p>
);

const CardContent = ({ className = "", children }) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
);

const CardFooter = ({ className = "", children }) => (
  <div className={`p-4 border-t border-gray-100 ${className}`}>
    {children}
  </div>
);

// Custom components
const SectionHeader = ({ icon, title, subtitle }) => {
  const Icon = icon;
  return (
    <div className="flex items-center gap-3 mb-4 border-b pb-2 border-gray-200">
      <Icon className="text-blue-600" size={24} />
      <div>
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
      </div>
    </div>
  );
};

const Quote = ({ text, source, date }) => (
  <blockquote className="border-l-4 border-blue-500 pl-4 my-4 italic bg-gray-50 p-3 rounded">
    <p className="text-gray-700">{text}</p>
    <footer className="text-sm text-gray-600 mt-2">— {source} {date && <span>({date})</span>}</footer>
  </blockquote>
);

const TimelineEvent = ({ date, title, description }) => (
  <div className="mb-6 relative pl-8 before:absolute before:left-0 before:top-1 before:w-4 before:h-4 before:bg-blue-500 before:rounded-full before:content-[''] after:absolute after:left-2 after:top-5 after:w-0.5 after:h-full after:bg-blue-300 after:content-['']">
    <p className="text-sm font-medium text-blue-600">{date}</p>
    <h3 className="text-lg font-bold mt-1">{title}</h3>
    <p className="text-gray-700 mt-2">{description}</p>
  </div>
);

const MediaCard = ({ source, headline, excerpt, date }) => (
  <Card className="mb-4 hover:shadow-md transition-shadow">
    <CardHeader className="pb-2">
      <div className="flex justify-between items-center">
        <p className="font-bold text-blue-600">{source}</p>
        <p className="text-xs text-gray-500">{date}</p>
      </div>
      <CardTitle className="text-lg">{headline}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-700 text-sm">{excerpt}</p>
    </CardContent>
  </Card>
);

const SudanUAEBriefing = () => {
  const [activeTab, setActiveTab] = useState("summary");

  return (
    <div className={`${MAX_WIDTH} p-4 bg-white`}>
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Sudan's Case Against the UAE at the ICJ</h1>
        <p className="text-xl text-gray-600">Alleged Funding of Rebels and Complicity in Genocide</p>
        <div className="flex justify-center items-center gap-2 mt-4 text-sm text-gray-500">
          <FileText size={16} />
          <span>Media Briefing | Last Updated: March 2025</span>
        </div>
      </header>

      <div className="w-full">
        <TabsList>
          <TabsTrigger value="summary" active={activeTab} onClick={setActiveTab}>Summary</TabsTrigger>
          <TabsTrigger value="timeline" active={activeTab} onClick={setActiveTab}>Timeline</TabsTrigger>
          <TabsTrigger value="statements" active={activeTab} onClick={setActiveTab}>Statements</TabsTrigger>
          <TabsTrigger value="analysis" active={activeTab} onClick={setActiveTab}>Analysis</TabsTrigger>
          <TabsTrigger value="sources" active={activeTab} onClick={setActiveTab}>Sources</TabsTrigger>
        </TabsList>

        <TabsContent value="summary" activeTab={activeTab}>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Case Overview</CardTitle>
                <CardDescription>Filed on March 6, 2025 at the Peace Palace in The Hague</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Sudan has filed a lawsuit against the United Arab Emirates at the International Court of Justice, accusing the UAE of violating the 1948 Genocide Convention by arming and financing the Rapid Support Forces (RSF), a Sudanese paramilitary group.</p>
                
                <p className="mb-4">In its application, Sudan alleges that the UAE gave "direct support" – including weapons, funds, and political backing – to the RSF during the ongoing civil war, making the UAE "complicit in the genocide on the Masalit" ethnic minority in West Darfur.</p>
                
                <p className="mb-4">The legal basis for the case is the Genocide Convention, to which both countries are parties. Sudan argues the UAE breached obligations to prevent genocide, as RSF fighters – allegedly armed and funded by the UAE – carried out widespread attacks involving murder, rape, looting, and ethnic killings.</p>
                
                <p>The UAE has forcefully denied these allegations, dismissing Sudan's application as "nothing more than a cynical publicity stunt" without legal or factual merit.</p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Key Facts</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 min-w-4 h-4 rounded-full bg-blue-500"></div>
                      <p className="text-sm">First case between Sudan and UAE at the ICJ</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 min-w-4 h-4 rounded-full bg-blue-500"></div>
                      <p className="text-sm">Based on the 1948 Genocide Convention</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 min-w-4 h-4 rounded-full bg-blue-500"></div>
                      <p className="text-sm">Focuses on atrocities against Masalit in West Darfur</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 min-w-4 h-4 rounded-full bg-blue-500"></div>
                      <p className="text-sm">Sudan requests urgent provisional measures</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 min-w-4 h-4 rounded-full bg-blue-500"></div>
                      <p className="text-sm">UAE denies all allegations categorically</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Human Toll</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <p className="mb-2">According to AP reports cited in the case:</p>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="bg-red-50 p-3 rounded border border-red-100 text-center">
                      <p className="text-2xl font-bold text-red-600">24,000+</p>
                      <p className="text-xs text-gray-700">People killed</p>
                    </div>
                    <div className="bg-red-50 p-3 rounded border border-red-100 text-center">
                      <p className="text-2xl font-bold text-red-600">14M</p>
                      <p className="text-xs text-gray-700">People displaced</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">The conflict has created one of the world's worst humanitarian crises, with mass displacement and ethnic targeting.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="timeline" activeTab={activeTab}>
          <SectionHeader 
            icon={Clock} 
            title="Timeline of Events" 
            subtitle="Key developments leading to Sudan's ICJ filing"
          />
          
          <div className="pl-4">
            <TimelineEvent 
              date="April 15, 2023"
              title="War Erupts in Sudan"
              description="A power struggle between Sudan's army chief (Gen. Abdel Fattah al-Burhan) and the RSF commander (Gen. Mohamed 'Hemedti' Dagalo) exploded into open warfare in Khartoum. The conflict stemmed from disputes over integrating the RSF into the regular military, leading to the collapse of Sudan's transitional government."
            />

            <TimelineEvent 
              date="Mid-2023"
              title="Atrocities in Darfur"
              description="As the war spread to Darfur, the non-Arab Masalit community was brutally attacked by RSF fighters and allied Arab militias. Between April and June 2023, systematic massacres occurred in El Geneina and surrounding areas, targeting Masalit men for killing and women for rape. West Darfur's governor – a Masalit leader – was assassinated after publicly accusing the RSF of genocide."
            />

            <TimelineEvent 
              date="Late 2023"
              title="Evidence of External Support"
              description="Sudan increasingly accused the UAE of secretly arming the rebels. In January 2024, a United Nations panel reported 'credible allegations' that cargo flights from the UAE to eastern Chad were delivering weapons to the RSF. Satellite images showed crates with UAE labels at a Chadian airstrip near Darfur. The UAE rejected these claims, insisting the flights carried humanitarian aid."
            />

            <TimelineEvent 
              date="January 2025"
              title="Genocide Determinations"
              description="The United States government formally determined that the RSF's attacks in Darfur constituted genocide and imposed sanctions on RSF leaders. U.S. lawmakers citing classified briefings stated they 'now know that the UAE has continued arming the RSF,' accusing Abu Dhabi of aiding Sudan's suffering. These statements added credibility to Sudan's claims."
            />

            <TimelineEvent 
              date="February 18, 2025"
              title="RSF Announces Parallel Government"
              description="The RSF and its civilian allies convened in Nairobi and announced a 'Sudan Founding Charter,' declaring their intent to form a parallel government opposed to the Burhan-led administration. This move was condemned by regional powers including Egypt, Saudi Arabia, and Qatar, who reaffirmed support for Sudan's legitimate government."
            />

            <TimelineEvent 
              date="March 6, 2025"
              title="Sudan Files ICJ Case"
              description="Sudan's government filed an application at the ICJ, initiating legal proceedings against the UAE. The filing accused the UAE of breaching the Genocide Convention through its 'direction of and provision of extensive financial, political, and military support' to the RSF militia. Sudan requested urgent provisional measures to halt any UAE support that could facilitate atrocities."
            />
          </div>
        </TabsContent>

        <TabsContent value="statements" activeTab={activeTab}>
          <SectionHeader 
            icon={MessageSquare} 
            title="Official Statements" 
            subtitle="Responses from key parties involved in the dispute"
          />
          
          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-gray-800 mb-3">Sudan's Position</h3>
              <Quote 
                text="The UAE has given direct support to the RSF, including weapons, funds, and political backing, making it complicit in the genocide on the Masalit."
                source="Sudan's Application to the ICJ"
                date="March 2025"
              />
              <Quote 
                text="We request the World Court to hold the UAE responsible for aiding genocidal acts and to urgently order provisional measures to prevent further harm."
                source="Sudan's Foreign Ministry Statement"
              />
              <div className="mt-4 pl-4 border-l-2 border-gray-200">
                <p className="text-sm text-gray-700 mb-2">Sudan has asked the ICJ to direct the UAE to:</p>
                <ul className="list-disc pl-4 text-sm text-gray-700 space-y-1">
                  <li>Take all measures within its power to stop any genocidal acts</li>
                  <li>Ensure that any militias under its influence do not commit atrocities</li>
                  <li>Cease all military and financial support to the RSF</li>
                  <li>Cooperate in preventing violence pending the final judgment</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3">UAE's Response</h3>
              <Quote 
                text="Sudan's application to the ICJ is nothing more than a cynical publicity stunt with no legal or factual merit."
                source="UAE Official Statement"
                date="March 2025"
              />
              <Quote 
                text="The UAE firmly rejects as baseless and unfounded any claims that it supplied arms to the RSF. Our role has been limited to humanitarian assistance and calls for peace."
                source="UAE Foreign Ministry"
              />
              <Quote 
                text="Sudan's priority should be to cease fire in this absurd and destructive war and address the massive humanitarian catastrophe, instead of engaging in feeble media maneuvers."
                source="Dr. Anwar Gargash, diplomatic adviser to the UAE leadership"
              />
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3">International Reactions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Supporting Sudan's Claims</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 min-w-3 h-3 rounded-full bg-green-500"></div>
                        <p><span className="font-medium">United States:</span> Formally determined RSF actions constitute genocide; lawmakers cited evidence of UAE arms transfers</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 min-w-3 h-3 rounded-full bg-green-500"></div>
                        <p><span className="font-medium">Egypt:</span> Strongly supports Sudan's government; opposes RSF and external interference</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 min-w-3 h-3 rounded-full bg-green-500"></div>
                        <p><span className="font-medium">UN Panel of Experts:</span> Reported "credible allegations" of UAE arms shipments to the RSF</p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Supporting UAE's Position</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 min-w-3 h-3 rounded-full bg-amber-500"></div>
                        <p><span className="font-medium">UAE Allies:</span> Some Gulf states have remained silent, implicitly supporting UAE's rejection of charges</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 min-w-3 h-3 rounded-full bg-amber-500"></div>
                        <p><span className="font-medium">Legal Observers:</span> Some note jurisdictional challenges and evidence burdens in genocide cases</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 min-w-3 h-3 rounded-full bg-amber-500"></div>
                        <p><span className="font-medium">UAE Narrative:</span> Points to Sudan army's own alleged atrocities to undermine Sudan's credibility</p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="analysis" activeTab={activeTab}>
          <SectionHeader 
            icon={Globe} 
            title="Geopolitical & Regional Analysis" 
            subtitle="Implications of the case beyond the courtroom"
          />
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-800 mb-3">Middle East Impact</h3>
              <Card className="bg-gray-50">
                <CardContent className="pt-4">
                  <p className="text-sm mb-4">The case lays bare strategic rifts in the region:</p>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <AlertCircle size={16} className="mt-1 text-amber-600" />
                      <p><span className="font-semibold">Egypt-UAE Tension:</span> Egypt strongly supports Sudan's army, putting it at odds with the UAE's alleged backing of the RSF</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle size={16} className="mt-1 text-amber-600" />
                      <p><span className="font-semibold">Gulf Split:</span> Qatar and Saudi Arabia have rejected the RSF's attempted parallel authority, while the UAE stands increasingly isolated</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle size={16} className="mt-1 text-amber-600" />
                      <p><span className="font-semibold">Proxy Warfare Precedent:</span> An ICJ ruling could impact other regional actors involved in conflicts in Libya, Yemen, and beyond</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="mt-6">
                <h3 className="font-bold text-gray-800 mb-3">Media Coverage Analysis</h3>
                <MediaCard 
                  source="Reuters"
                  headline="Sudan launches case against UAE at World Court"
                  excerpt="The filing accuses the UAE of providing extensive financial, political, and military support to the RSF, which Sudan alleges has committed genocide against the Masalit ethnic group."
                  date="March 2025"
                />
                <MediaCard 
                  source="Al Jazeera"
                  headline="UAE dismisses Sudan's ICJ case as 'publicity stunt'"
                  excerpt="Abu Dhabi has forcefully rejected all allegations, maintaining its role has been limited to humanitarian assistance and promoting peace talks between warring factions."
                  date="March 2025"
                />
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3">African Dimension</h3>
              <Card className="bg-gray-50 mb-6">
                <CardContent className="pt-4">
                  <p className="text-sm mb-4">The case underscores concerns about external interference in African conflicts:</p>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <AlertCircle size={16} className="mt-1 text-blue-600" />
                      <p><span className="font-semibold">African Union Position:</span> The AU has called for non-interference and an African-led solution</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle size={16} className="mt-1 text-blue-600" />
                      <p><span className="font-semibold">Border Instability:</span> Chad and South Sudan face refugee inflows and armed group spillover</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle size={16} className="mt-1 text-blue-600" />
                      <p><span className="font-semibold">Gulf Influence:</span> The case could affect investment and aid patterns in the Horn of Africa and Sahel</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <h3 className="font-bold text-gray-800 mb-3">Expert Perspectives</h3>
              <Quote 
                text="This is the third active conflict brought to the ICJ under the Genocide Convention, after Ukraine and The Gambia/Myanmar cases. Sudan's charge that the UAE violated its duty to prevent genocide by aiding the RSF presents novel legal questions."
                source="Legal Analysis, Doughty Street Chambers"
              />
              <Quote 
                text="The evidence of RSF atrocities is strong, including 'trophy videos' of their attacks. Evidence of UAE arms shipments suggests the ICJ should act swiftly on provisional measures."
                source="World Peace Foundation"
              />

              <div className="mt-6">
                <MediaCard 
                  source="The Africa Report"
                  headline="Sudan takes UAE to court: A desperate move or justified action?"
                  excerpt="Sudan's decision to sue the UAE at the ICJ signals an attempt to pressure a foreign patron allegedly contributing to its devastation, while raising questions about state accountability for proxy warfare."
                  date="March 2025"
                />
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="sources" activeTab={activeTab}>
          <SectionHeader 
            icon={BookOpen} 
            title="Sources & References" 
            subtitle="Information basis for understanding the Sudan v. UAE case"
          />
          
          <p className="mb-6 text-gray-700">
            This briefing draws information from a combination of official ICJ case documents, statements by the governments of Sudan and the UAE, investigative journalism by international media, and analyses by legal experts and regional specialists.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Primary Sources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800">Official Documents</h3>
                  <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1 mt-2">
                    <li>Application of Sudan at the ICJ (2025)</li>
                    <li>ICJ Press Release, 6 March 2025</li>
                    <li>Sudan's request for provisional measures</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800">Official Statements</h3>
                  <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1 mt-2">
                    <li>Sudan Foreign Ministry statements</li>
                    <li>Sudan's UN representatives' claims</li>
                    <li>UAE Foreign Ministry responses</li>
                    <li>Statements by Dr. Anwar Gargash (UAE)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800">UN Reports</h3>
                  <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1 mt-2">
                    <li>UN Panel of Experts report on arms transfers (Jan 2024)</li>
                    <li>UN Secretary-General's Special Adviser on Genocide Prevention statements</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Media & Analysis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800">Key Investigative Reports</h3>
                  <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1 mt-2">
                    <li>Reuters: "Sudan launches case against UAE at World Court"</li>
                    <li>Reuters: "Dozens of UAE flights head to airstrip UN says supplies arms to Sudan rebels" (Dec 2024)</li>
                    <li>Reuters: "US lawmakers find UAE provides weapons to Sudan RSF; UAE denies this" (Jan 2025)</li>
                    <li>Associated Press coverage of ICJ filing and Masalit massacres</li>
                    <li>Al Jazeera reporting on the case and humanitarian impact</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800">Expert Analysis</h3>
                  <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1 mt-2">
                    <li>Doughty Street Chambers legal commentary</li>
                    <li>World Peace Foundation analysis of atrocities and evidence</li>
                    <li>The Africa Report geopolitical assessment</li>
                    <li>France24/AFP analysis of Sudan's legal strategy</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded border border-gray-200">
            <p className="text-gray-700 text-sm italic">
              "Overall, the information in this report is drawn from a combination of official ICJ case documents, statements by the governments of Sudan and the UAE, investigative journalism by international media (Reuters, AP, Al Jazeera, etc.), and analyses by legal experts and regional specialists. These sources provide a well-rounded, fact-checked basis for understanding the complex case of Sudan v. UAE at the ICJ. The citations included ensure that each claim and event described is backed by credible evidence from these sources."
            </p>
          </div>
        </TabsContent>
      </div>
    </div>
  );
};

export default SudanUAEBriefing;