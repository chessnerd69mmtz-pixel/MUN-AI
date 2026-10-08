/* COP31 intelligence layer — current as of 8 Oct 2026.
   Static facts are deliberately source-labelled; current positions must be verified
   against the linked UNFCCC/national documents before being treated as fact. */
(function(){
  var COP31_SOURCES=[
    {name:"UNFCCC COP31 hub",url:"https://unfccc.int/cop31",why:"Official conference hub, session links and current announcements."},
    {name:"COP31 pre-session documents",url:"https://unfccc.int/event/cop-31",why:"Official COP31 documents and agenda materials."},
    {name:"COP31 provisional agenda",url:"https://unfccc.int/documents/660056",why:"Official provisional agenda and annotations."},
    {name:"CMA8 provisional agenda",url:"https://unfccc.int/documents/660055",why:"Paris Agreement governing-body agenda material."},
    {name:"COP31 Road to Antalya",url:"https://unfccc.int/cop31/the-road-to-antalya",why:"Presidency communications and process updates."},
    {name:"COP31 participant information",url:"https://unfccc.int/cop31/ifp",why:"Official participant/process information."},
    {name:"UNFCCC documents",url:"https://unfccc.int/documents",why:"Searchable official submissions, decisions and technical documents."},
    {name:"COP31 Türkiye Presidency",url:"https://cop31.tr/",why:"Host Presidency information and Action Agenda material."}
  ];

  var COP31_TRACKS={
    COP31:{label:"COP31 (Convention)",body:"Conference of the Parties to the UNFCCC. Focus on Convention implementation, institutional questions and negotiation outcomes within the UNFCCC mandate."},
    CMA8:{label:"CMA8 (Paris Agreement)",body:"Meeting of Parties to the Paris Agreement. Track Paris Agreement implementation, NDCs, transparency, adaptation, finance, Article 6 and related CMA decisions."},
    CMP21:{label:"CMP21 (Kyoto Protocol)",body:"Meeting of Parties to the Kyoto Protocol. Do not attribute CMA-only powers or Paris Agreement provisions to CMP21."},
    SBSTA65:{label:"SBSTA65",body:"Subsidiary Body for Scientific and Technological Advice. Technical/scientific and methodological work; distinguish advice and negotiation from final COP/CMA decision authority."},
    SBI65:{label:"SBI65",body:"Subsidiary Body for Implementation. Implementation, institutional and process matters; distinguish SBI work from final COP/CMA decisions."}
  };

  var COP31_ISSUES=[
    {id:"ndc",name:"NDCs / ambition",tags:["NDC","1.5C","mitigation","implementation"],prompt:"Assess the country's current NDC posture, ambition/implementation concerns, likely negotiation asks and defensible compromise language. Verify any current numeric target before using it."},
    {id:"finance",name:"Climate finance",tags:["finance","NCQG","access","MDBs"],prompt:"Assess climate-finance interests, contributor/recipient concerns, access, predictability, concessionality, transparency and institutional channels. Never invent a current pledge."},
    {id:"adaptation",name:"Adaptation & resilience",tags:["adaptation","GGA","resilience"],prompt:"Assess adaptation priorities, Global Goal on Adaptation implementation, indicators, finance access and country vulnerabilities without inventing statistics."},
    {id:"lossdamage",name:"Loss & damage",tags:["loss and damage","Fund","Warsaw","Santiago"],prompt:"Assess loss-and-damage policy, finance, access and institutional concerns; distinguish the Fund, WIM and other mechanisms."},
    {id:"article6",name:"Article 6",tags:["Article 6","ITMOs","6.2","6.4","6.8"],prompt:"Assess Article 6 negotiation implications, accounting/integrity/authorization concerns and the distinction between 6.2, 6.4 and 6.8."},
    {id:"transparency",name:"Transparency / BTRs",tags:["BTR","ETF","transparency"],prompt:"Assess Enhanced Transparency Framework implementation, reporting capacity, review, flexibility and support; verify current submission status."},
    {id:"technology",name:"Technology transfer",tags:["technology","TEC","CTCN","capacity"],prompt:"Assess technology-development/transfer, access, finance, capacity-building and institutional responsibilities."},
    {id:"justtransition",name:"Just transition",tags:["just transition","work programme","workers"],prompt:"Assess just-transition concerns, development space, social protection, workers and implementation pathways."},
    {id:"gender",name:"Gender & climate",tags:["gender","Gender Action Plan"],prompt:"Assess gender-responsive climate policy and implementation while avoiding tokenistic or unsupported country claims."},
    {id:"implementation",name:"Implementation / Action Agenda",tags:["implementation","delivery","action"],prompt:"Turn negotiated outcomes into measurable implementation, responsible institutions, finance, timelines, reporting and review."}
  ];

  var COP31_PRINCIPLES=[
    "Treat official UNFCCC/COP31 documents as the primary source for conference procedure and negotiated text.",
    "Treat national governments/Permanent Missions as primary sources for a country's current position.",
    "Separate verified fact, inference and tactical advice.",
    "Never invent a country's current NDC, finance pledge, red line, alliance or voting position.",
    "Do not treat COP/UNFCCC consensus decisions as ordinary majority-vote MUN resolutions.",
    "Do not collapse COP31, CMA8, CMP21, SBSTA65 and SBI65 into one body; always identify the track.",
    "For draft language, test mandate, legal basis, responsible institution, funding, monitoring and implementation.",
    "For a live-room question, give a short immediate action first, then supporting evidence and fallback options.",
    "When current information is needed, explicitly recommend checking the linked current source rather than presenting static knowledge as current."
  ];

  function issueById(id){for(var i=0;i<COP31_ISSUES.length;i++)if(COP31_ISSUES[i].id===id)return COP31_ISSUES[i];return COP31_ISSUES[0]}
  function sourceText(){return COP31_SOURCES.map(function(s){return "- "+s.name+": "+s.url+" — "+s.why}).join("\n")}
  function buildCOP31Context(country,track,issue,objective){
    var t=COP31_TRACKS[track]||COP31_TRACKS.COP31, i=issueById(issue);
    return [
      "COP31 INTELLIGENCE LAYER — conference date context: 8 October 2026.",
      "Track: "+t.label,
      "Track mandate/context: "+t.body,
      "Assigned country: "+(country||"not set"),
      "Issue: "+i.name,
      "Issue analysis task: "+i.prompt,
      "Negotiation objective: "+(objective||"not specified"),
      "COP31 source discipline:\n"+COP31_PRINCIPLES.map(function(x){return "- "+x}).join("\n"),
      "Official current-source pack:\n"+sourceText(),
      "COP31 presidency/process note: Türkiye hosts COP31 in Antalya; UNFCCC lists COP31, CMP21, CMA8, SBSTA65 and SBI65 provisional agendas. The Presidency has emphasized dialogue, consensus and action. Verify any evolving procedural detail against the current UNFCCC materials.",
      "Known negotiation architecture: Parties negotiate through formal/informal settings and subsidiary bodies; final outcomes depend on the applicable body's mandate and conference rules. This app must not invent a procedural vote threshold where consensus practice or conference-specific rules apply.",
      "Climate issue guardrails: distinguish mitigation, adaptation, loss and damage, finance, technology transfer, capacity-building, transparency and just transition; distinguish NDCs from BTRs and distinguish COP decisions from CMA decisions."
    ].join("\n\n");
  }
  window.COP31_SOURCES=COP31_SOURCES;
  window.COP31_TRACKS=COP31_TRACKS;
  window.COP31_ISSUES=COP31_ISSUES;
  window.buildCOP31Context=buildCOP31Context;
  window.getCOP31Issue=issueById;
})();
