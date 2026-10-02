/** Comprehensive Niv AI country + committee intelligence. Generated from official UN pages. */
export const MUN_COMMITTEE_INTELLIGENCE={
  "General Assembly Plenary": {
    "type": "UN principal organ",
    "mandate": "Main deliberative, policymaking and representative organ; all 193 Member States participate with one vote.",
    "authority": "Charter-wide deliberative and budgetary functions; recommendations and decisions within Charter limits.",
    "outputs": [
      "resolutions",
      "decisions",
      "declarations",
      "budgetary decisions",
      "elections and appointments"
    ],
    "debate": "General debate, thematic debate, list of speakers, negotiations, draft resolutions, amendments and recorded/adopted decisions.",
    "strategy": "Track regional-group dynamics, sponsors/co-sponsors, operative language, voting thresholds and whether the matter is plenary or committee-referred.",
    "cautions": "Do not treat GA resolutions as automatically binding on states unless a specific legal basis applies.",
    "sources": [
      "https://www.un.org/pga/81/general-assembly/",
      "https://www.un.org/en/ga/about/ropga/index.shtml"
    ]
  },
  "First Committee (DISEC)": {
    "type": "GA Main Committee",
    "mandate": "Disarmament and International Security.",
    "authority": "Considers disarmament, global security and related international-security questions and recommends draft resolutions to the Assembly.",
    "outputs": [
      "draft resolutions",
      "decisions",
      "reports"
    ],
    "debate": "Weapons systems, non-proliferation, arms control, outer space security, emerging technologies, conventional weapons and security architecture.",
    "strategy": "Map security interests, treaty status, verification, compliance, civilian harm, export controls, financing and implementation mechanisms.",
    "cautions": "Separate legal obligations from political commitments; verify treaty membership before asserting obligations.",
    "sources": [
      "https://www.un.org/en/ga/maincommittees/",
      "https://www.un.org/en/ga/first/"
    ]
  },
  "Second Committee (ECOFIN)": {
    "type": "GA Main Committee",
    "mandate": "Economic and Financial.",
    "authority": "Economic growth, development, financing, trade/development questions, macroeconomic and sustainable-development issues within GA competence.",
    "outputs": [
      "draft resolutions",
      "decisions",
      "reports"
    ],
    "debate": "Development finance, debt, trade, technology transfer, poverty, food/energy security, commodities and sustainable development.",
    "strategy": "Test proposals for funding source, implementation capacity, distributional effects, conditionality and measurable outcomes.",
    "cautions": "Do not invent funding commitments or imply that a GA resolution can compel institutions beyond its authority.",
    "sources": [
      "https://www.un.org/en/ga/maincommittees/",
      "https://www.un.org/en/ga/second/"
    ]
  },
  "Third Committee (SOCHUM)": {
    "type": "GA Main Committee",
    "mandate": "Social, Humanitarian and Cultural.",
    "authority": "Human rights, humanitarian and social issues referred to it by the Assembly.",
    "outputs": [
      "draft resolutions",
      "decisions",
      "reports"
    ],
    "debate": "Human rights, refugees, migration, women, children, disability, discrimination, humanitarian protection and social development.",
    "strategy": "Ground claims in treaties, UN mechanisms and documented evidence; separate normative commitments from enforcement mechanisms.",
    "cautions": "Avoid claiming a treaty obligation without checking ratification/status; avoid treating allegations as established facts.",
    "sources": [
      "https://www.un.org/en/ga/maincommittees/",
      "https://www.ohchr.org/en/countries"
    ]
  },
  "Fourth Committee (SPECPOL)": {
    "type": "GA Main Committee",
    "mandate": "Special Political and Decolonization.",
    "authority": "Special political questions, decolonization and related agenda items assigned by the Assembly.",
    "outputs": [
      "draft resolutions",
      "decisions",
      "reports"
    ],
    "debate": "Decolonization, peacekeeping-related political questions, information, special political situations and selected regional issues.",
    "strategy": "Track mandate, status of territories, relevant resolutions and the exact language used in prior decisions.",
    "cautions": "Do not collapse separate territorial, sovereignty and self-determination questions into one legal claim.",
    "sources": [
      "https://www.un.org/en/ga/maincommittees/",
      "https://www.un.org/dppa/decolonization/en"
    ]
  },
  "Fifth Committee": {
    "type": "GA Main Committee",
    "mandate": "Administrative and Budgetary.",
    "authority": "Administrative and budgetary matters of the United Nations.",
    "outputs": [
      "budget decisions",
      "administrative decisions",
      "reports",
      "appropriation decisions"
    ],
    "debate": "Programme budgets, assessments, peacekeeping financing, staffing, oversight, efficiency and resources.",
    "strategy": "Every proposal should answer cost, funding source, mandate, implementation body, oversight and audit questions.",
    "cautions": "Budget authority and assessed contributions are technical; do not invent percentages or funding mechanisms.",
    "sources": [
      "https://www.un.org/en/ga/maincommittees/",
      "https://www.un.org/en/ga/fifth/"
    ]
  },
  "Sixth Committee": {
    "type": "GA Main Committee",
    "mandate": "Legal.",
    "authority": "Legal matters referred by the General Assembly.",
    "outputs": [
      "draft resolutions",
      "conventions",
      "reports",
      "legal recommendations"
    ],
    "debate": "International law, treaty law, state responsibility, jurisdiction, terrorism-law questions, codification and legal development.",
    "strategy": "Identify the legal question, applicable instrument, state consent, jurisdiction, precedent and implementation pathway.",
    "cautions": "Distinguish treaty law, customary international law, Charter provisions, General Assembly recommendations and domestic law.",
    "sources": [
      "https://www.un.org/en/ga/maincommittees/",
      "https://legal.un.org/"
    ]
  },
  "Security Council": {
    "type": "UN principal organ",
    "mandate": "Primary responsibility for international peace and security.",
    "authority": "Under the Charter it can adopt decisions binding on Member States in applicable cases, impose sanctions and authorize measures including force under the Charter framework.",
    "outputs": [
      "resolutions",
      "presidential statements",
      "press statements",
      "sanctions decisions",
      "mandates"
    ],
    "debate": "Crisis management, ceasefires, sanctions, peace operations, authorization, reporting, humanitarian access and conflict-specific diplomacy.",
    "strategy": "Track P5 positions, elected members, veto exposure, draft language, operative authority and whether the text is politically or legally actionable.",
    "cautions": "The Council has 15 members; P5 veto dynamics and voting requirements matter. Do not treat a simulated MUN voting rule as identical to the real Council unless the conference says so.",
    "sources": [
      "https://main.un.org/securitycouncil/en/content/current-members",
      "https://main.un.org/securitycouncil/en/content/voting-system"
    ]
  },
  "ECOSOC": {
    "type": "UN principal organ",
    "mandate": "Coordinates economic, social and related work of the UN system.",
    "authority": "Forum for discussion, coordination, policy recommendations and interaction with functional commissions and specialized agencies.",
    "outputs": [
      "resolutions",
      "decisions",
      "ministerial declarations",
      "coordination outcomes"
    ],
    "debate": "Development, financing, SDGs, economic policy, social issues and coordination across the UN development system.",
    "strategy": "Connect proposals to SDGs, measurable indicators, financing, institutional responsibility and cross-agency coordination.",
    "cautions": "Do not attribute operational powers of specialized agencies directly to ECOSOC.",
    "sources": [
      "https://ecosoc.un.org/"
    ]
  },
  "Human Rights Council": {
    "type": "UN subsidiary intergovernmental body",
    "mandate": "Promotes and protects human rights and addresses human-rights situations and thematic issues.",
    "authority": "Intergovernmental deliberation, resolutions, recommendations, Universal Periodic Review and special procedures framework.",
    "outputs": [
      "resolutions",
      "decisions",
      "UPR outcomes",
      "mandate renewals",
      "recommendations"
    ],
    "debate": "Country situations, thematic rights, accountability, treaty implementation, UPR and special procedures.",
    "strategy": "Use primary UN/OHCHR documents; distinguish allegations, findings, recommendations and binding law.",
    "cautions": "Council membership is regionally allocated and changes by election; check the current session before making membership claims.",
    "sources": [
      "https://www.ohchr.org/en/hr-bodies/hrc"
    ]
  },
  "WHO": {
    "type": "UN specialized agency",
    "mandate": "International public health.",
    "authority": "World Health Assembly and WHO constitutional framework; technical standards, coordination and health emergencies within its mandate.",
    "outputs": [
      "resolutions",
      "decisions",
      "technical guidance",
      "action plans"
    ],
    "debate": "Pandemic preparedness, surveillance, vaccines, antimicrobial resistance, health systems, access and financing.",
    "strategy": "Specify implementation agency, surveillance, procurement, financing, data-sharing and equity safeguards.",
    "cautions": "Do not give WHO powers it does not possess; distinguish recommendations from binding instruments.",
    "sources": [
      "https://www.who.int/about/governance/world-health-assembly"
    ]
  },
  "UNEP": {
    "type": "UN programme",
    "mandate": "Global environmental authority and coordination.",
    "authority": "Coordinates environmental work and supports environmental governance, science and policy.",
    "outputs": [
      "decisions",
      "action plans",
      "assessments",
      "environmental initiatives"
    ],
    "debate": "Climate, biodiversity, pollution, chemicals, waste, oceans and environmental governance.",
    "strategy": "Specify targets, finance, technology transfer, measurement, reporting and national implementation.",
    "cautions": "Separate UNEP's coordinating role from treaty bodies and UNFCCC institutions.",
    "sources": [
      "https://www.unep.org/who-we-are"
    ]
  },
  "UN Women": {
    "type": "UN entity",
    "mandate": "Gender equality and women's empowerment.",
    "authority": "Supports normative, operational and coordination work on gender equality within the UN system.",
    "outputs": [
      "policy frameworks",
      "programmes",
      "reports",
      "decisions through relevant governing bodies"
    ],
    "debate": "Gender-based violence, political participation, economic empowerment, education, peace and security and institutional equality.",
    "strategy": "Use measurable protections, survivor-centered implementation, financing, data and accountability.",
    "cautions": "Do not attribute sovereign domestic-policy powers to UN Women.",
    "sources": [
      "https://www.unwomen.org/en/about-us"
    ]
  },
  "UNHCR": {
    "type": "UN agency",
    "mandate": "International protection of refugees and solutions to displacement.",
    "authority": "Protection and assistance within its mandate, coordination and durable-solutions work.",
    "outputs": [
      "protection guidance",
      "programmes",
      "appeals",
      "reports"
    ],
    "debate": "Refugee protection, asylum, statelessness, displacement, resettlement and humanitarian response.",
    "strategy": "Address legal status, registration, protection, host-state capacity, funding and durable solutions.",
    "cautions": "Refugee, asylum-seeker, internally displaced person and migrant are not interchangeable categories.",
    "sources": [
      "https://www.unhcr.org/about-unhcr"
    ]
  },
  "International Court of Justice (ICJ)": {
    "type": "UN principal judicial organ",
    "mandate": "Settles legal disputes between states within its jurisdiction and gives advisory opinions.",
    "authority": "Jurisdiction depends on state consent through applicable legal bases; judgments are between parties to a case.",
    "outputs": [
      "judgments",
      "orders",
      "advisory opinions"
    ],
    "debate": "Jurisdiction, admissibility, merits, provisional measures, treaty interpretation and state responsibility.",
    "strategy": "Identify jurisdictional hook before merits; separate factual allegations from legal elements and remedies.",
    "cautions": "ICJ is not a criminal court and does not prosecute individuals.",
    "sources": [
      "https://www.icj-cij.org/court"
    ]
  },
  "International Criminal Court (ICC)": {
    "type": "Independent international court",
    "mandate": "Prosecutes individuals for genocide, crimes against humanity, war crimes and aggression within its jurisdiction.",
    "authority": "Rome Statute jurisdiction and admissibility framework.",
    "outputs": [
      "prosecutor applications",
      "decisions",
      "warrants",
      "judgments",
      "orders"
    ],
    "debate": "Jurisdiction, complementarity, evidence, command responsibility, victim protection and cooperation.",
    "strategy": "Separate state responsibility from individual criminal responsibility and verify Rome Statute status.",
    "cautions": "ICC is not a UN organ and its jurisdiction is not universal.",
    "sources": [
      "https://www.icc-cpi.int/about/the-court"
    ]
  }
} as const
export const MUN_COUNTRY_INTELLIGENCE=[
  {
    "name": "Afghanistan",
    "admission": "19-11-1946",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Albania",
    "admission": "14-12-1955",
    "regionalGroup": "Eastern European States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Algeria",
    "admission": "08-10-1962",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Andorra",
    "admission": "28-07-1993",
    "regionalGroup": "Western European and other States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Angola",
    "admission": "01-12-1976",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Antigua and Barbuda",
    "admission": "11-11-1981",
    "regionalGroup": "Latin American and Caribbean States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Argentina",
    "admission": "24-10-1945",
    "regionalGroup": "Latin American and Caribbean States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Armenia",
    "admission": "02-03-1992",
    "regionalGroup": "Eastern European States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Australia",
    "admission": "01-11-1945",
    "regionalGroup": "Western European and other States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Austria",
    "admission": "14-12-1955",
    "regionalGroup": "Western European and other States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Azerbaijan",
    "admission": "02-03-1992",
    "regionalGroup": "Eastern European States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Bahamas",
    "admission": "18-09-1973",
    "regionalGroup": "Unclassified in regional table",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Bahrain",
    "admission": "21-09-1971",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Bangladesh",
    "admission": "17-09-1974",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Barbados",
    "admission": "09-12-1966",
    "regionalGroup": "Latin American and Caribbean States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Belarus",
    "admission": "24-10-1945",
    "regionalGroup": "Eastern European States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Belgium",
    "admission": "27-12-1945",
    "regionalGroup": "Western European and other States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Belize",
    "admission": "25-09-1981",
    "regionalGroup": "Latin American and Caribbean States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Benin",
    "admission": "20-09-1960",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Bhutan",
    "admission": "21-09-1971",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Bolivia (Plurinational State of)",
    "admission": "14-11-1945",
    "regionalGroup": "Latin American and Caribbean States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Bosnia and Herzegovina",
    "admission": "22-05-1992",
    "regionalGroup": "Eastern European States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Botswana",
    "admission": "17-10-1966",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Brazil",
    "admission": "24-10-1945",
    "regionalGroup": "Latin American and Caribbean States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Brunei Darussalam",
    "admission": "21-09-1984",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Bulgaria",
    "admission": "14-12-1955",
    "regionalGroup": "Eastern European States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Burkina Faso",
    "admission": "20-09-1960",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Burundi",
    "admission": "18-09-1962",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Cabo Verde",
    "admission": "16-09-1975",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Cambodia",
    "admission": "14-12-1955",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Cameroon",
    "admission": "20-09-1960",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Canada",
    "admission": "09-11-1945",
    "regionalGroup": "Western European and other States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Central African Republic",
    "admission": "20-09-1960",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Chad",
    "admission": "20-09-1960",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Chile",
    "admission": "24-10-1945",
    "regionalGroup": "Latin American and Caribbean States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "China (the People's Republic of)",
    "admission": "24-10-1945",
    "regionalGroup": "Unclassified in regional table",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Colombia",
    "admission": "05-11-1945",
    "regionalGroup": "Latin American and Caribbean States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Comoros",
    "admission": "12-11-1975",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Congo",
    "admission": "20-09-1960",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Costa Rica",
    "admission": "02-11-1945",
    "regionalGroup": "Latin American and Caribbean States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Côte D'Ivoire",
    "admission": "20-09-1960",
    "regionalGroup": "Unclassified in regional table",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Croatia",
    "admission": "22-05-1992",
    "regionalGroup": "Eastern European States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Cuba",
    "admission": "24-10-1945",
    "regionalGroup": "Latin American and Caribbean States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Cyprus",
    "admission": "20-09-1960",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Czechia",
    "admission": "19-01-1993",
    "regionalGroup": "Eastern European States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Democratic People's Republic of Korea",
    "admission": "17-09-1991",
    "regionalGroup": "Unclassified in regional table",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Democratic Republic of the Congo",
    "admission": "20-09-1960",
    "regionalGroup": "Unclassified in regional table",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Denmark",
    "admission": "24-10-1945",
    "regionalGroup": "Western European and other States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Djibouti",
    "admission": "20-09-1977",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Dominica",
    "admission": "18-12-1978",
    "regionalGroup": "Latin American and Caribbean States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Dominican Republic",
    "admission": "24-10-1945",
    "regionalGroup": "Latin American and Caribbean States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Ecuador",
    "admission": "21-12-1945",
    "regionalGroup": "Latin American and Caribbean States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Egypt",
    "admission": "24-10-1945",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "El Salvador",
    "admission": "24-10-1945",
    "regionalGroup": "Latin American and Caribbean States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Equatorial Guinea",
    "admission": "12-11-1968",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Eritrea",
    "admission": "28-05-1993",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Estonia",
    "admission": "17-09-1991",
    "regionalGroup": "Eastern European States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Eswatini",
    "admission": "24-09-1968",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Ethiopia",
    "admission": "13-11-1945",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Fiji",
    "admission": "13-10-1970",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Finland",
    "admission": "14-12-1955",
    "regionalGroup": "Western European and other States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "France",
    "admission": "24-10-1945",
    "regionalGroup": "Western European and other States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Gabon",
    "admission": "20-09-1960",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Gambia (Republic of The)",
    "admission": "21-09-1965",
    "regionalGroup": "Unclassified in regional table",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Georgia",
    "admission": "31-07-1992",
    "regionalGroup": "Eastern European States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Germany",
    "admission": "18-09-1973",
    "regionalGroup": "Western European and other States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Ghana",
    "admission": "08-03-1957",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Greece",
    "admission": "25-10-1945",
    "regionalGroup": "Western European and other States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Grenada",
    "admission": "17-09-1974",
    "regionalGroup": "Latin American and Caribbean States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Guatemala",
    "admission": "21-11-1945",
    "regionalGroup": "Latin American and Caribbean States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Guinea",
    "admission": "12-12-1958",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Guinea Bissau",
    "admission": "17-09-1974",
    "regionalGroup": "Unclassified in regional table",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Guyana",
    "admission": "20-09-1966",
    "regionalGroup": "Latin American and Caribbean States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Haiti",
    "admission": "24-10-1945",
    "regionalGroup": "Latin American and Caribbean States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Honduras",
    "admission": "17-12-1945",
    "regionalGroup": "Latin American and Caribbean States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Hungary",
    "admission": "14-12-1955",
    "regionalGroup": "Eastern European States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Iceland",
    "admission": "19-11-1946",
    "regionalGroup": "Western European and other States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "India",
    "admission": "30-10-1945",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Indonesia",
    "admission": "28-09-1950",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Iran (Islamic Republic of)",
    "admission": "24-10-1945",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Iraq",
    "admission": "21-12-1945",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Ireland",
    "admission": "14-12-1955",
    "regionalGroup": "Western European and other States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Israel",
    "admission": "11-05-1949",
    "regionalGroup": "Western European and other States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Italy",
    "admission": "14-12-1955",
    "regionalGroup": "Western European and other States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Jamaica",
    "admission": "18-09-1962",
    "regionalGroup": "Latin American and Caribbean States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Japan",
    "admission": "18-12-1956",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Jordan",
    "admission": "14-12-1955",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Kazakhstan",
    "admission": "02-03-1992",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Kenya",
    "admission": "16-12-1963",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Kiribati",
    "admission": "14-09-1999",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Kuwait",
    "admission": "14-05-1963",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Kyrgyzstan",
    "admission": "02-03-1992",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Lao People’s Democratic Republic",
    "admission": "14-12-1955",
    "regionalGroup": "Unclassified in regional table",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Latvia",
    "admission": "17-09-1991",
    "regionalGroup": "Eastern European States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Lebanon",
    "admission": "24-10-1945",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Lesotho",
    "admission": "17-10-1966",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Liberia",
    "admission": "02-11-1945",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Libya",
    "admission": "14-12-1955",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Liechtenstein",
    "admission": "18-09-1990",
    "regionalGroup": "Western European and other States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Lithuania",
    "admission": "17-09-1991",
    "regionalGroup": "Eastern European States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Luxembourg",
    "admission": "24-10-1945",
    "regionalGroup": "Western European and other States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Madagascar",
    "admission": "20-09-1960",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Malawi",
    "admission": "01-12-1964",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Malaysia",
    "admission": "17-09-1957",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Maldives",
    "admission": "21-09-1965",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Mali",
    "admission": "28-09-1960",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Malta",
    "admission": "01-12-1964",
    "regionalGroup": "Western European and other States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Marshall Islands",
    "admission": "17-09-1991",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Mauritania",
    "admission": "27-10-1961",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Mauritius",
    "admission": "24-04-1968",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Mexico",
    "admission": "07-11-1945",
    "regionalGroup": "Latin American and Caribbean States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Micronesia (Federated States of)",
    "admission": "17-09-1991",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Monaco",
    "admission": "28-05-1993",
    "regionalGroup": "Western European and other States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Mongolia",
    "admission": "27-10-1961",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Montenegro",
    "admission": "28-06-2006",
    "regionalGroup": "Eastern European States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Morocco",
    "admission": "12-11-1956",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Mozambique",
    "admission": "16-09-1975",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Myanmar",
    "admission": "19-04-1948",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Namibia",
    "admission": "23-04-1990",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Naoero",
    "admission": "14-09-1999",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Nepal",
    "admission": "14-12-1955",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Netherlands (Kingdom of the)",
    "admission": "10-12-1945",
    "regionalGroup": "Unclassified in regional table",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "New Zealand",
    "admission": "24-10-1945",
    "regionalGroup": "Western European and other States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Nicaragua",
    "admission": "24-10-1945",
    "regionalGroup": "Latin American and Caribbean States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Niger",
    "admission": "20-09-1960",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Nigeria",
    "admission": "07-10-1960",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "North Macedonia",
    "admission": "08-04-1993",
    "regionalGroup": "Eastern European States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Norway",
    "admission": "27-11-1945",
    "regionalGroup": "Western European and other States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Oman",
    "admission": "07-10-1971",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Pakistan",
    "admission": "30-09-1947",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Palau",
    "admission": "15-12-1994",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Panama",
    "admission": "13-11-1945",
    "regionalGroup": "Latin American and Caribbean States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Papua New Guinea",
    "admission": "10-10-1975",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Paraguay",
    "admission": "24-10-1945",
    "regionalGroup": "Latin American and Caribbean States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Peru",
    "admission": "31-10-1945",
    "regionalGroup": "Latin American and Caribbean States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Philippines",
    "admission": "24-10-1945",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Poland",
    "admission": "24-10-1945",
    "regionalGroup": "Eastern European States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Portugal",
    "admission": "14-12-1955",
    "regionalGroup": "Western European and other States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Qatar",
    "admission": "21-09-1971",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Republic of Korea",
    "admission": "17-09-1991",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Republic of Moldova",
    "admission": "02-03-1992",
    "regionalGroup": "Eastern European States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Romania",
    "admission": "14-12-1955",
    "regionalGroup": "Eastern European States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Russian Federation",
    "admission": "24-10-1945",
    "regionalGroup": "Eastern European States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Rwanda",
    "admission": "18-09-1962",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Saint Kitts and Nevis",
    "admission": "23-09-1983",
    "regionalGroup": "Latin American and Caribbean States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Saint Lucia",
    "admission": "18-09-1979",
    "regionalGroup": "Latin American and Caribbean States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Saint Vincent and the Grenadines",
    "admission": "16-09-1980",
    "regionalGroup": "Latin American and Caribbean States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Samoa",
    "admission": "15-12-1976",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "San Marino",
    "admission": "02-03-1992",
    "regionalGroup": "Western European and other States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Sao Tome and Principe",
    "admission": "16-09-1975",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Saudi Arabia",
    "admission": "24-10-1945",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Senegal",
    "admission": "28-09-1960",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Serbia",
    "admission": "01-11-2000",
    "regionalGroup": "Eastern European States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Seychelles",
    "admission": "21-09-1976",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Sierra Leone",
    "admission": "27-09-1961",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Singapore",
    "admission": "21-09-1965",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Slovakia",
    "admission": "19-01-1993",
    "regionalGroup": "Eastern European States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Slovenia",
    "admission": "22-05-1992",
    "regionalGroup": "Eastern European States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Solomon Islands",
    "admission": "19-09-1978",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Somalia",
    "admission": "20-09-1960",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "South Africa",
    "admission": "07-11-1945",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "South Sudan",
    "admission": "14-07-2011",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Spain",
    "admission": "14-12-1955",
    "regionalGroup": "Western European and other States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Sri Lanka",
    "admission": "14-12-1955",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Sudan",
    "admission": "12-11-1956",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Suriname",
    "admission": "04-12-1975",
    "regionalGroup": "Latin American and Caribbean States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Sweden",
    "admission": "19-11-1946",
    "regionalGroup": "Western European and other States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Switzerland",
    "admission": "10-09-2002",
    "regionalGroup": "Western European and other States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Syrian Arab Republic",
    "admission": "24-10-1945",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Tajikistan",
    "admission": "02-03-1992",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Thailand",
    "admission": "15-12-1946",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Timor-Leste",
    "admission": "27-09-2002",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Togo",
    "admission": "20-09-1960",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Tonga",
    "admission": "14-09-1999",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Trinidad and Tobago",
    "admission": "18-09-1962",
    "regionalGroup": "Latin American and Caribbean States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Tunisia",
    "admission": "12-11-1956",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Türkiye",
    "admission": "24-10-1945",
    "regionalGroup": "Western European and other States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Turkmenistan",
    "admission": "02-03-1992",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Tuvalu",
    "admission": "05-09-2000",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Uganda",
    "admission": "25-10-1962",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Ukraine",
    "admission": "24-10-1945",
    "regionalGroup": "Eastern European States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "United Arab Emirates",
    "admission": "09-12-1971",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "United Kingdom of Great Britain and Northern Ireland",
    "admission": "24-10-1945",
    "regionalGroup": "Western European and other States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "United Republic of Tanzania",
    "admission": "14-12-1961",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "United States of America",
    "admission": "24-10-1945",
    "regionalGroup": "Western European and other States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Uruguay",
    "admission": "18-12-1945",
    "regionalGroup": "Latin American and Caribbean States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Uzbekistan",
    "admission": "02-03-1992",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Vanuatu",
    "admission": "15-09-1981",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Venezuela, Bolivarian Republic of",
    "admission": "15-11-1945",
    "regionalGroup": "Unclassified in regional table",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Viet Nam",
    "admission": "20-09-1977",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Yemen",
    "admission": "30-09-1947",
    "regionalGroup": "Asia-Pacific States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Zambia",
    "admission": "01-12-1964",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  },
  {
    "name": "Zimbabwe",
    "admission": "25-08-1980",
    "regionalGroup": "African States",
    "officialSources": {
      "memberState": "https://www.un.org/en/about-us/member-states",
      "memberRecord": "https://www.un.org/en/library/unms",
      "researchResources": "https://www.un.org/en/mun/resources/research-resources",
      "voting": "https://www.un.org/en/node/75083"
    },
    "dossier": {
      "identity": [
        "official name",
        "UN admission",
        "regional group",
        "official state terminology",
        "Permanent Mission"
      ],
      "domesticContext": [
        "constitutional and political system",
        "demographics",
        "economic structure",
        "development indicators",
        "human-development indicators"
      ],
      "diplomacy": [
        "foreign-ministry statements",
        "Permanent Mission statements",
        "regional organizations",
        "regional-group coordination",
        "treaty positions"
      ],
      "UNRecord": [
        "General Debate statements",
        "principal-organ speeches",
        "co-sponsored resolutions",
        "voting record",
        "elected-body memberships",
        "Security Council service"
      ],
      "law": [
        "UN Charter positions",
        "treaty participation",
        "reservations and declarations",
        "ICJ cases",
        "international legal statements"
      ],
      "humanRights": [
        "treaty-body status",
        "UPR outcomes",
        "special-procedure interactions",
        "documented national statements"
      ],
      "development": [
        "SDG/VNR",
        "NDC",
        "NAP",
        "development cooperation",
        "official statistics"
      ],
      "security": [
        "peacekeeping contributions",
        "disarmament statements",
        "arms-control/treaty status",
        "sanctions-related record"
      ],
      "committeeFit": [
        "committee mandate",
        "agenda authority",
        "relevant prior UN documents",
        "country-specific primary sources"
      ],
      "roomUse": [
        "verified facts",
        "safe claims",
        "claims needing current verification",
        "documented negotiation interests",
        "red lines only when documented"
      ]
    }
  }
] as const
export const CURRENT_2026_UN_BODY_MEMBERS = {
  securityCouncil: ["China","France","Russian Federation","United Kingdom of Great Britain and Northern Ireland","United States of America","Bahrain","Colombia","Democratic Republic of the Congo","Denmark","Greece","Latvia","Liberia","Pakistan","Panama","Somalia"],
  humanRightsCouncil: ["Angola","Benin","Burundi","Côte d'Ivoire","Democratic Republic of the Congo","Egypt","Ethiopia","Gambia","Ghana","Kenya","Malawi","Mauritius","South Africa","China","Cyprus","India","Indonesia","Iraq","Japan","Kuwait","Marshall Islands","Pakistan","Qatar","Republic of Korea","Thailand","Viet Nam","Albania","Bulgaria","Czechia","Estonia","North Macedonia","Slovenia","Bolivia (Plurinational State of)","Brazil","Chile","Colombia","Cuba","Dominican Republic","Ecuador","Mexico","France","Iceland","Italy","Netherlands (Kingdom of the)","Spain","Switzerland","United Kingdom of Great Britain and Northern Ireland"],
  generalAssemblyMainCommitteeChairs: {
    first: "Nepal",
    second: "Albania",
    third: "Australia",
    fourth: "Senegal",
    fifth: "Nigeria",
    sixth: "Guyana"
  }
} as const

const normalize=(value:string)=>value.toLowerCase().replace(/[’']/g,"").replace(/[^a-z0-9]+/g," ").trim()
const COMMITTEE_ALIASES={"disec":"First Committee (DISEC)","first":"First Committee (DISEC)","first committee":"First Committee (DISEC)","ecofin":"Second Committee (ECOFIN)","second":"Second Committee (ECOFIN)","second committee":"Second Committee (ECOFIN)","sochum":"Third Committee (SOCHUM)","third":"Third Committee (SOCHUM)","third committee":"Third Committee (SOCHUM)","specpol":"Fourth Committee (SPECPOL)","fourth":"Fourth Committee (SPECPOL)","fourth committee":"Fourth Committee (SPECPOL)","fifth committee":"Fifth Committee","sixth committee":"Sixth Committee","legal committee":"Sixth Committee","unsc":"Security Council","security council":"Security Council","sc":"Security Council","hrc":"Human Rights Council","human rights council":"Human Rights Council","un women":"UN Women","unep":"UNEP","who":"WHO","unhcr":"UNHCR","ecosoc":"ECOSOC","icj":"International Court of Justice (ICJ)","icc":"International Criminal Court (ICC)"} as Record<string,string>
export function findCountryIntelligence(country:string){const n=normalize(country);if(!n)return null;return MUN_COUNTRY_INTELLIGENCE.find(x=>{const k=normalize(x.name);return k===n||k.includes(n)||n.includes(k)})??null}
export function findCommitteeIntelligence(committee:string){const n=normalize(committee);if(!n)return null;const aliasKey=Object.keys(COMMITTEE_ALIASES).find(k=>n===k||n.includes(k));const canonical=COMMITTEE_ALIASES[n]??(aliasKey?COMMITTEE_ALIASES[aliasKey]:"");return (MUN_COMMITTEE_INTELLIGENCE as Record<string, (typeof MUN_COMMITTEE_INTELLIGENCE)[keyof typeof MUN_COMMITTEE_INTELLIGENCE]>)[canonical||committee]??null}
export function buildNivIntelligenceContext(country:string,committee:string){
 const c=findCountryIntelligence(country),k=findCommitteeIntelligence(committee),parts:string[]=[]
 if(c)parts.push(["COUNTRY INTELLIGENCE — STATIC VERIFIED METADATA","Country: "+c.name,"UN admission: "+c.admission,"UN regional group: "+c.regionalGroup,"Official research routes: "+Object.entries(c.officialSources).map(([key,url])=>key+"="+url).join("; "),"COUNTRY DOSSIER — INFORMATION TO RETRIEVE OR VERIFY",JSON.stringify(c.dossier,null,2)].join("\n"))
 if(k){\n  const currentBodies=Object.entries(CURRENT_2026_UN_BODY_MEMBERS).filter(([key,value])=>Array.isArray(value)&&value.includes(country)||key==="generalAssemblyMainCommitteeChairs").map(([key,value])=>key+": "+JSON.stringify(value)).join("\n")\n  parts.push(["COMMITTEE INTELLIGENCE — MANDATE, AUTHORITY AND ROOM PLAYBOOK",JSON.stringify(k,null,2),currentBodies].join("\n"))\n}
 parts.push("SOURCE DISCIPLINE: Static country metadata is factual. Country policy, current votes, current officeholders, treaty status, sanctions and current events are changeable. Verify them from primary sources before presenting them as current. Never convert a research dimension into an invented fact.")
 return parts.join("\n\n")
}
