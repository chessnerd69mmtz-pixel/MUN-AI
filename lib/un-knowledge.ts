/**
 * Local UN / MUN knowledge base.
 *
 * This file intentionally stores concise, paraphrased reference knowledge rather
 * than copying large portions of UN publications. It is injected into the AI
 * system prompt so local Ollama can answer common MUN questions without relying
 * on its pretrained memory alone.
 *
 * Primary official references:
 * - https://www.un.org/en/about-us/un-charter/full-text
 * - https://www.un.org/en/ga/about/ropga/index.shtml
 * - https://main.un.org/securitycouncil/en/content/voting-system
 * - https://www.un.org/en/model-united-nations/rules-procedure-0
 * - https://www.un.org/en/about-us/universal-declaration-of-human-rights
 */

export const UN_KNOWLEDGE_BASE = `
UNITED NATIONS / MUN REFERENCE KNOWLEDGE

1. UN FOUNDING AND PURPOSE
- The United Nations was established by the UN Charter in 1945.
- The Charter's core purposes include maintaining international peace and security; developing friendly relations among nations based on equal rights and self-determination; international cooperation on economic, social, cultural and humanitarian problems; promoting human rights and fundamental freedoms; and serving as a centre for harmonizing international action.
- Core Charter principles include sovereign equality of Members, good-faith performance of Charter obligations, peaceful settlement of disputes, and refraining from the threat or use of force against the territorial integrity or political independence of a state or in ways inconsistent with UN purposes.
- The Charter also establishes duties concerning assistance to UN action and the relationship between Member States and non-Members in relation to UN principles.

2. SIX PRINCIPAL ORGANS
- General Assembly (GA): universal deliberative organ in which all UN Member States participate. Each Member has one vote in the Assembly. The GA discusses matters within the Charter and generally makes recommendations, subject to Charter limits.
- Security Council (UNSC): primary UN organ for international peace and security. It has 15 members: 5 permanent members and 10 elected non-permanent members. The permanent members are China, France, Russian Federation, United Kingdom and United States.
- Economic and Social Council (ECOSOC): coordinates work relating to economic, social and environmental issues and cooperation with the wider UN system.
- International Court of Justice (ICJ): principal judicial organ of the UN. It decides contentious cases between states that fall within its jurisdiction and gives advisory opinions when properly requested.
- Secretariat: carries out the day-to-day work of the UN under the leadership of the Secretary-General.
- Trusteeship Council: one of the six principal organs; its original trusteeship functions became inactive after the completion of the UN trust territory process.

3. GENERAL ASSEMBLY POWERS
- The GA can discuss questions within the Charter's scope and make recommendations to Member States or the Security Council, except where the Charter provides otherwise.
- The GA considers general principles of cooperation in maintaining international peace and security, including disarmament and arms regulation.
- The GA can initiate studies and make recommendations concerning international political cooperation, development and codification of international law, economic/social/cultural/educational/health cooperation and human rights.
- The GA approves the UN budget and participates in elections/appointments specified by the Charter, including election of non-permanent Security Council members and appointment of the Secretary-General on the Security Council's recommendation.
- Do not describe a normal GA resolution as automatically equivalent to a binding Security Council decision. Explain the legal effect of the particular instrument and Charter basis.

4. SECURITY COUNCIL
- Every Security Council member has one vote.
- Procedural decisions require at least 9 affirmative votes.
- Other Security Council decisions generally require at least 9 affirmative votes including the concurring votes of the permanent members, subject to the Charter's voting rules.
- A negative vote by a permanent member on a substantive matter is commonly described as a veto.
- A permanent member abstention is not the same as a veto and can allow adoption when the required affirmative vote threshold is otherwise met.
- Security Council work is strongly connected to Chapter VI (pacific settlement), Chapter VII (action with respect to threats to the peace, breaches of the peace and acts of aggression), and other Charter provisions. Never claim that every UNSC resolution is a Chapter VII enforcement resolution.
- The Council can adopt resolutions, presidential statements and other outcomes. Explain the type of document before describing its legal/political effect.
- Sanctions, peacekeeping mandates and authorizations should be described with their specific legal basis and wording rather than assumed.

5. CHARTER CHAPTERS — QUICK MAP
- Chapter I: Purposes and Principles.
- Chapter II: Membership.
- Chapter III: Organs.
- Chapter IV: General Assembly.
- Chapter V: Security Council.
- Chapter VI: Pacific Settlement of Disputes.
- Chapter VII: Action with Respect to Threats to the Peace, Breaches of the Peace, and Acts of Aggression.
- Chapter VIII: Regional Arrangements.
- Chapter IX: International Economic and Social Cooperation.
- Chapter X: Economic and Social Council.
- Chapter XI: Declaration regarding Non-Self-Governing Territories.
- Chapter XII: International Trusteeship System.
- Chapter XIII: Trusteeship Council.
- Chapter XIV: International Court of Justice.
- Chapter XV: Secretariat.
- Chapter XVI: Miscellaneous Provisions.
- Chapter XVII: Transitional Security Arrangements.
- Chapter XVIII: Amendments.
- Chapter XIX: Ratification and Signature.

6. IMPORTANT CHARTER CONCEPTS
- Article 2(1): sovereign equality of Members.
- Article 2(2): Members are expected to fulfil Charter obligations in good faith.
- Article 2(3): disputes should be settled by peaceful means so international peace, security and justice are not endangered.
- Article 2(4): Members must refrain from threat or use of force against territorial integrity or political independence of a state, or in other ways inconsistent with UN purposes.
- Article 24: Security Council has primary responsibility for maintenance of international peace and security.
- Article 25: Members agree to accept and carry out Security Council decisions in accordance with the Charter.
- Article 33: parties to disputes likely to endanger peace should seek solutions by negotiation, enquiry, mediation, conciliation, arbitration, judicial settlement, regional arrangements or other peaceful means of their choice.
- Article 51: recognizes the inherent right of individual or collective self-defence if an armed attack occurs, while requiring measures taken in self-defence to be reported to the Security Council; never give simplistic legal conclusions without considering the facts and applicable international law.
- Article 53: addresses enforcement action under regional arrangements and the Charter's framework.
- Article 92: ICJ is the principal judicial organ.
- Article 94: UN Members undertake to comply with ICJ decisions in cases to which they are parties; the Charter provides a Security Council pathway concerning non-compliance.
- Article 96: GA or Security Council may request ICJ advisory opinions on legal questions, with additional authorized UN organs/agencies able to do so within their competence.

7. GENERAL ASSEMBLY PROCEDURE
- The official GA Rules of Procedure contain 163 rules covering sessions, agenda, delegations, credentials, officers, the General Committee, Secretariat, languages, records, meetings, plenary procedure, committees, admission of new Members, elections, budget questions, subsidiary organs, interpretation and amendments.
- The GA has regular sessions and can hold special/emergency special sessions under the applicable rules.
- The provisional agenda is prepared and communicated according to the Rules of Procedure; agenda items have formal procedures for adoption, amendment, deletion and debate.
- Formal GA procedure includes points of order, motions, speakers' lists, voting and consideration of draft resolutions. Exact conference/MUN rules can differ from actual UN procedure, so ask for the conference's Rules of Procedure when a procedural answer must be exact.
- In official GA practice, quorum and voting requirements depend on the matter and applicable rule. Do not reduce all GA decisions to one universal voting formula.
- The UN's official languages are Arabic, Chinese, English, French, Russian and Spanish.

8. MUN PROCEDURE — GENERAL MODEL
- MUN conferences are simulations, not the UN itself. Conference-specific Rules of Procedure always control.
- Common MUN concepts include attendance/quorum, roll call, agenda setting, speakers list, moderated caucus, unmoderated caucus, points, motions, working papers, draft resolutions, amendments and voting.
- A point of order normally concerns procedural/rules compliance rather than the substance of another delegate's argument.
- A point of personal privilege generally concerns a delegate's ability to participate comfortably/effectively (for example audibility), subject to conference rules.
- A point of information/clarification, POI, POO or similar labels are conference-specific; do not assume identical meanings across conferences.
- Moderated caucus: structured short speeches on a focused subtopic with a defined speaking time.
- Unmoderated caucus: informal negotiation/drafting period where delegates form blocs, merge proposals and write documents.
- Working paper: negotiation document; it is not automatically a resolution.
- Draft resolution: structured proposal submitted for consideration and eventual voting under the conference rules.
- Amendment: proposed change to a draft resolution. Friendly/unfriendly amendment terminology and voting treatment vary by conference.
- Always distinguish actual UN procedure from the simulation's rules.

9. RESOLUTION DRAFTING
- A strong draft resolution should have a clear problem definition, realistic authority for the committee, actionable operative clauses, implementation mechanisms, responsible actors, financing/resources where relevant, monitoring/evaluation and a plausible timeline.
- Preambulatory clauses establish context, prior UN action, principles, concerns, treaties, reports or relevant facts. They generally do not create the main operative action.
- Operative clauses contain proposed actions and should be numbered, specific and internally coherent.
- Avoid assigning powers to an organ that does not possess them. For example, a GA committee should not casually create powers reserved to the Security Council, ICJ or Member States.
- Use verbs appropriate to the committee's authority: recommend, encourage, request, call upon, urge, invite, establish (where procedurally/legal appropriate), and other terms permitted by the conference.
- Good clauses identify who acts, what is done, how it is implemented, who funds/coordinates it where relevant, and how results are evaluated.
- Avoid vague phrases such as "solve the issue immediately" or "ensure complete compliance" without an implementation pathway.

10. MUN DIPLOMACY
- A delegate represents the assigned state's policy position, not the delegate's personal beliefs.
- Coalition building normally requires identifying overlapping interests rather than demanding identical ideology.
- Distinguish national interest, legal position, diplomatic rhetoric, policy preference and actual UN voting record.
- Use respectful diplomatic language. Challenge proposals and evidence rather than attacking delegates personally.
- A persuasive speech normally benefits from: problem -> evidence -> national position -> proposed action -> implementation -> coalition invitation.
- A strong rebuttal can acknowledge a legitimate concern, identify the gap/contradiction, provide evidence or an alternative mechanism, and return to the resolution's objective.
- Do not fabricate quotations, treaty obligations, voting records, UN statistics or country positions. If uncertain, say that verification is needed.

11. UN DOCUMENT AND RESOLUTION TERMINOLOGY
- UN resolutions commonly use document symbols identifying organ/session/document type and number. The exact symbol matters for research.
- A resolution is different from a treaty. A declaration may express principles without having the same legal status as a treaty.
- A convention/treaty is an international agreement whose legal effects depend on its text, entry into force and participation/ratification rules.
- A report is not automatically a binding decision.
- A presidential statement is a Security Council outcome distinct from a resolution.
- An ICJ judgment in a contentious case is distinct from an advisory opinion.
- UNGA recommendations and UNSC decisions should not be described using the same legal-effect language.

12. HUMAN RIGHTS
- The Universal Declaration of Human Rights (UDHR) was proclaimed by the GA in 1948 as a common standard of achievement.
- The UDHR contains 30 articles addressing civil, political, economic, social and cultural rights and principles including equality, non-discrimination, life, liberty, security, freedom from slavery and torture, fair/legal protections, expression, religion, association, participation, social security, work, education and an international order in which rights can be realized.
- The UDHR is a declaration rather than a treaty. Do not automatically describe every provision as a treaty obligation.
- Later human-rights treaties and monitoring mechanisms should be identified separately when relevant.

13. SUSTAINABLE DEVELOPMENT
- The 2030 Agenda contains 17 Sustainable Development Goals (SDGs) and 169 targets.
- The SDGs cover poverty, hunger, health, education, gender equality, water, energy, work/economic growth, infrastructure/innovation, inequality, cities, responsible consumption/production, climate, oceans, terrestrial ecosystems, peace/justice/institutions and partnerships.
- MUN proposals referencing SDGs should connect a proposed action to a specific goal/target where useful rather than simply listing SDG numbers.

14. COMMON MUN AGENDA AREAS
- Climate: mitigation, adaptation, loss and damage, climate finance, technology transfer, resilience, just transition and capacity-building.
- Disarmament: non-proliferation, arms control, verification, export controls, confidence-building, risk reduction and humanitarian consequences.
- Refugees/migration: protection, non-refoulement, host-state capacity, burden/responsibility sharing, documentation, livelihoods and durable solutions.
- Public health: surveillance, prevention, health systems, access, supply chains, financing, research cooperation and equity.
- Food security: agricultural resilience, supply chains, nutrition, water, financing, climate impacts and conflict.
- Cybersecurity: responsible state behaviour, critical infrastructure, capacity building, cybercrime distinctions, sovereignty and international cooperation.
- AI/governance: safety, accountability, access, capacity building, human rights, data governance and development impacts.
- Peacekeeping: mandate, consent, impartiality, protection of civilians, rules of engagement, host-state relations, financing and exit/transition planning.
- Development: financing, technology, trade, infrastructure, capacity building, debt sustainability and institutional strengthening.

15. COUNTRY-POSITION RESEARCH RULE
- Pretrained knowledge is not sufficient for a current country position.
- When asked for a country's position, distinguish: official government statements, UN voting records, treaty status, national law/policy, diplomatic statements and credible secondary analysis.
- Prefer primary sources such as UN documents, official government/foreign ministry statements, treaty databases and official statistics.
- Never infer a country's position solely from geography, ideology, historical stereotypes or the model's memory.
- For current events or current positions, use the app's research tools when available.

16. EVIDENCE / HALLUCINATION CONTROL
- Treat dates, numbers, treaty status, voting records, resolution numbers, quotations and legal claims as facts requiring verification.
- If a fact is not present in the supplied knowledge or research context, clearly mark it as uncertain instead of inventing it.
- Do not invent UN resolution numbers or fake citations.
- When the user asks for citations, give identifiable source names/document symbols/links only when actually supported.
- Separate established fact, legal interpretation, policy analysis and strategic MUN advice.

17. MUN STRATEGY CHECKLIST
For any strategy request, consider:
A. Committee mandate and authority.
B. Agenda wording.
C. Assigned country's interests and stated policy.
D. Relevant Charter/treaty/UN framework.
E. Existing UN action and gaps.
F. Allies, swing states and likely opposition.
G. Concrete, implementable clauses.
H. Financing and institutional responsibility.
I. Verification/monitoring.
J. Humanitarian, legal and geopolitical trade-offs.
K. Likely objections and rebuttals.
L. Negotiation fallback positions.
M. A concise speech/message that converts analysis into action.

18. RESPONSE BEHAVIOUR FOR MUN AI
- Start with the committee/agenda context when known.
- Use the knowledge above as a factual baseline, not as a substitute for current research.
- When the user asks for a resolution, produce realistic clauses within the committee's mandate.
- When the user asks for a speech, make it diplomatic, country-specific and evidence-conscious.
- When the user asks for strategy, separate facts from tactical recommendations.
- If the conference's rules are unknown and procedure matters, explicitly flag that the conference rules control.
- If current information is needed, use the app's research capability rather than pretending this static knowledge is current.


19. PRINCIPAL ORGANS — DEEPER MUN REFERENCE
- General Assembly: broad deliberative scope; six Main Committees are First Committee (Disarmament and International Security), Second Committee (Economic and Financial), Third Committee (Social, Humanitarian and Cultural), Fourth Committee (Special Political and Decolonization), Fifth Committee (Administrative and Budgetary), and Sixth Committee (Legal).
- First Committee commonly covers nuclear weapons, conventional weapons, outer space security, emerging military technologies, disarmament education and international security.
- Second Committee commonly covers development finance, economic growth, poverty, trade, sustainable development and macroeconomic issues.
- Third Committee commonly covers human rights, humanitarian/social questions, gender, children, refugees and vulnerable groups.
- Fourth Committee commonly covers decolonization, special political issues, peacekeeping-related political matters and other topics assigned to it.
- Fifth Committee handles administrative and budgetary matters, including UN financial and personnel questions.
- Sixth Committee focuses on legal questions, codification and progressive development of international law and selected treaty/legal issues.
- ECOSOC coordinates economic, social and environmental work across the UN system and related commissions/forums.
- Security Council has a narrower peace-and-security mandate than the GA; do not give it a generic development mandate.
- ICJ handles disputes between states and advisory opinions; it is not a criminal court for individuals.
- Secretariat supports implementation and administration of mandates; it is not equivalent to a national executive.
- Specialized agencies are autonomous international organizations linked to the UN system; do not call every UN-affiliated body a UN department.

20. GENERAL ASSEMBLY MAIN COMMITTEES — ISSUE MAPPING
- DISEC / First Committee: arms control, disarmament, proliferation, international security and emerging security technologies.
- ECOFIN / Second Committee: development finance, economic growth, poverty, trade, sustainable development and macroeconomic issues.
- SOCHUM / Third Committee: human rights, humanitarian/social questions, gender, children, refugees and protection.
- SPECPOL / Fourth Committee: decolonization, special political questions, peacekeeping-related political matters and other assigned topics.
- Fifth Committee: budget, administration, programme planning, staffing and institutional resources.
- Sixth Committee: international law, treaty/legal questions, codification and legal principles.
- Committee mandate should determine clause verbs and institutions. If a clause belongs to another organ, flag the jurisdiction problem and rewrite it to fit.

21. COMMON UN FUNDS, PROGRAMMES AND ENTITIES
- UNDP: development, poverty reduction, governance, resilience and development capacity.
- UNICEF: children, child rights, health, nutrition, education and protection.
- UNHCR: international protection and solutions for refugees and related displacement situations under its mandate.
- WFP: food assistance and humanitarian food-security operations.
- WHO: global public health and health-system cooperation.
- UNEP: environmental issues and global environmental cooperation.
- UN Women: gender equality and empowerment of women.
- UNFPA: population and sexual/reproductive-health work.
- UN-Habitat: sustainable urban development and human settlements.
- UNESCO: education, science, culture, communication and information.
- FAO: food and agriculture.
- ILO: labour standards, decent work and social dialogue.
- IOM: migration-related cooperation and assistance; describe its institutional relationship accurately.
- OCHA: humanitarian coordination and emergency response.
- OHCHR: promotion and protection of human rights and support for the High Commissioner.
- UNODC: crime, drugs, corruption and criminal-justice cooperation.
- UNCTAD: trade and development analysis/policy support.
- UNIDO: inclusive and sustainable industrial development.
- IFAD: rural development, smallholder agriculture and food-system investment.
- World Bank Group and IMF belong to the wider international financial architecture and have formal UN relationships, but are not UN departments.

22. PEACEKEEPING FUNDAMENTALS
- UN peacekeeping is based on mandates established by the competent UN organ, most often the Security Council.
- Traditional principles commonly include consent of the parties, impartiality in implementing the mandate, and non-use of force except as authorized and necessary under the mandate and applicable rules.
- Modern mandates can include civilian protection, political processes, human rights, DDR support, rule-of-law assistance and other tasks.
- Peacekeeping is distinct from peace enforcement. Never assume a peacekeeping mission has unrestricted coercive authority.
- A realistic peacekeeping clause should identify mandate, host-state relationship, reporting, financing, personnel, civilian-protection safeguards and transition criteria.
- Avoid proposing unlimited troop deployments or vague “UN forces” without explaining authorization and contributors.

23. SANCTIONS AND SECURITY COUNCIL TOOLS
- Security Council sanctions can target individuals, entities, commodities, sectors, travel, finance or arms depending on the specific regime.
- Sanctions design should consider humanitarian effects, exemptions, monitoring, implementation capacity, due process/listing-delisting and review.
- Arms embargoes are not interchangeable with all other sanctions.
- Asset freezes and travel bans affect designated persons/entities under the applicable regime.
- A sanctions proposal should identify objective, implementing actors, monitoring and review/termination criteria.
- Never claim a normal GA resolution can independently impose a binding UNSC sanctions regime.

24. INTERNATIONAL LAW BUILDING BLOCKS
- Treaty law, customary international law, general principles and judicial decisions/scholarship have distinct roles.
- Signature and ratification are not necessarily the same act; treaty participation depends on the instrument and state action.
- Reservations can alter a state's consent where legally permitted and valid.
- Entry into force is distinct from signature or ratification and must be checked in the relevant treaty.
- State responsibility analysis asks whether conduct attributable to a state breached an applicable international obligation and what consequences follow.
- Jurisdiction is foundational: identify the legal basis before claiming a court/body can decide a matter.
- International humanitarian law and international human rights law interact but are distinct legal regimes.
- Refugee law, human rights law and humanitarian law overlap in some situations but use different definitions and frameworks.
- Contested legal interpretations should be presented as contested, not as settled fact.

25. INTERNATIONAL HUMANITARIAN LAW — MUN BASICS
- IHL concerns conduct of hostilities and protection of persons affected by armed conflict.
- Distinction requires parties to distinguish civilians/combatants and civilian objects/military objectives under applicable law.
- Proportionality in attack concerns expected incidental civilian harm relative to the concrete and direct military advantage anticipated.
- Precautions in attack require feasible measures to reduce civilian harm.
- Protected categories can include civilians, wounded and sick persons, detainees/prisoners of war in applicable conflicts, medical personnel and humanitarian personnel under relevant law.
- Do not label every incident a war crime without sufficient factual and legal basis; propose investigation, documentation and accountability where appropriate.

26. REFUGEES, IDPS AND MIGRATION
- Refugees, internally displaced persons and migrants are not interchangeable categories.
- Refugees generally cross an international border and fall within refugee-protection frameworks; IDPs remain within their country.
- Non-refoulement is a central refugee-protection principle, subject to the applicable legal framework.
- Durable solutions commonly discussed include voluntary repatriation, local integration and resettlement; complementary pathways can also be relevant.
- Migration policy can involve labour mobility, regular pathways, border management, integration, return and development.
- Trafficking and smuggling are distinct concepts and should not be conflated.

27. CLIMATE GOVERNANCE
- Climate diplomacy distinguishes mitigation, adaptation, loss and damage, finance, technology transfer, capacity-building and transparency.
- Mitigation reduces emissions or enhances removals; adaptation reduces vulnerability to climate impacts.
- Climate-finance proposals should specify source, access mechanism, eligibility, transparency and implementation capacity where possible.
- Just transition proposals address social/economic consequences of shifting toward lower-emission systems.
- Climate negotiations can involve differentiated national circumstances, development needs, equity and different historical/current emissions.
- Do not invent current emissions figures or national targets; verify current commitments.

28. DISARMAMENT AND NON-PROLIFERATION
- Disarmament means reducing/eliminating weapons or capabilities; arms control regulates possession, deployment, testing or use; non-proliferation seeks to prevent spread.
- Verification is central to credible arms-control arrangements.
- Confidence-building measures can include information exchange, notifications, hotlines, inspections or transparency.
- Nuclear agendas may involve deterrence, non-proliferation, disarmament, safety/security, testing, fissile materials and humanitarian consequences.
- Chemical and biological weapons agendas require attention to prohibition, verification, assistance and attribution.
- Conventional-weapons agendas can include small arms/light weapons, landmines, cluster munitions, arms transfers and civilian harm depending on committee scope.

29. GLOBAL HEALTH
- Health proposals can target prevention, surveillance, diagnostics, treatment, vaccines, medicines, health workforce, supply chains, financing and resilience.
- Pandemic preparedness can include surveillance, laboratory capacity, information sharing, medical countermeasures, manufacturing and equitable access.
- Distinguish voluntary cooperation, national regulatory authority and binding international commitments.
- WHO is the UN specialized agency for health; other UN bodies have complementary mandates.
- Never invent disease statistics, outbreak status or current WHO guidance.

30. FOOD, WATER AND NUTRITION
- Food security is multidimensional: availability, access, utilization/nutrition and stability are common analytical dimensions.
- Conflict, climate shocks, economic disruption, infrastructure failures and displacement can affect food systems.
- Water policy can involve drinking water, sanitation, irrigation, transboundary management, pollution, drought and ecosystems.
- Credible proposals can combine infrastructure, financing, local capacity, data, early warning and emergency assistance.
- Food aid is not the only solution to structural food insecurity.

31. GENDER EQUALITY AND WOMEN, PEACE AND SECURITY
- Gender policy can address discrimination, political participation, education, economic opportunity, health, violence prevention and justice.
- Women, Peace and Security commonly emphasizes participation, protection, prevention and relief/recovery.
- Avoid tokenistic references; identify measurable institutional, financial or participation mechanisms.
- Gender-sensitive policy should consider differentiated impacts without making unsupported assumptions about individuals or countries.

32. CHILDREN AND YOUTH
- Child-focused policy can address education, nutrition, health, protection from violence, trafficking/recruitment, displacement, digital safety and participation.
- The Convention on the Rights of the Child is a major international framework; treaty status must be checked for a specific state.
- Youth policy should distinguish children/minors from broader youth categories because definitions vary.

33. WOMEN’S RIGHTS AND SEXUAL/REPRODUCTIVE HEALTH
- Relevant policy areas include maternal health, health services, gender-based violence prevention, education, economic participation and legal protection.
- International terminology and legal commitments vary by instrument and state; do not assert universal legal mandates without a source.
- In contentious agendas, present competing legal/policy positions accurately and distinguish consensus language from disputed proposals.

34. CYBERSECURITY AND DIGITAL GOVERNANCE
- Cyber discussions can involve responsible state behaviour, international law, critical infrastructure, incident response, capacity-building, cybercrime, supply chains, privacy and digital inclusion.
- Cybersecurity, cybercrime and military cyber operations are related but distinct domains.
- Define whether a cyber resolution addresses states, private companies, criminal actors, international organizations or combinations.
- Do not invent universal cyber norms or claim voluntary frameworks are automatically binding law.

35. ARTIFICIAL INTELLIGENCE
- AI governance can involve safety, accountability, transparency, human oversight, privacy, discrimination/bias, labour impacts, security, development and access.
- Distinguish voluntary principles, standards, capacity-building, national regulation and binding treaty obligations.
- Developing-country concerns can include compute access, skills, infrastructure, data capacity and technology transfer.
- Do not claim the UN has a single universal AI regulator unless current institutional evidence supports it.

36. ECONOMIC DEVELOPMENT AND FINANCE
- Development proposals can involve domestic resource mobilization, international public finance, private investment, debt sustainability, trade, infrastructure, technology transfer and capacity-building.
- Financing proposals should identify contributors, eligibility, eligible activities and transparency.
- Debt relief/restructuring involves multiple institutions and creditor classes; do not assign authority to an organ that lacks it.
- Fifth Committee handles many UN administrative/budgetary questions, while development policy involves a wider institutional system.
- Trade policy should distinguish UN deliberation from the separate institutional role of the WTO.

37. DECOLONIZATION AND SELF-DETERMINATION
- Self-determination is a Charter-linked principle with extensive UN practice.
- Decolonization is addressed through specific UN processes and organs, including the Fourth Committee.
- Self-determination claims can involve complex questions of territorial status, representation, sovereignty and applicable international law.
- Do not reduce every territorial dispute to one simplistic legal formula.

38. PEACEFUL SETTLEMENT OF DISPUTES
- Negotiation: direct diplomatic engagement.
- Mediation: third-party assistance toward an agreed solution.
- Conciliation: investigation and proposed terms without the same binding effect as a court judgment.
- Arbitration: agreed tribunal/process for deciding a dispute.
- Judicial settlement: court decision where jurisdiction exists.
- Fact-finding/enquiry can establish or clarify facts.
- Regional organizations can provide dispute mechanisms under their own legal frameworks.
- Match the mechanism to the dispute, consent and jurisdiction realities.

39. REGIONAL ORGANIZATIONS
- Chapter VIII addresses regional arrangements and agencies.
- Regional organizations may contribute to mediation, peacekeeping, sanctions implementation, development or humanitarian coordination according to their own mandates.
- Examples include African Union, European Union, ASEAN, Arab League and Organization of American States; their powers differ substantially.
- Never assume a regional organization has the same authority as a UN principal organ.

40. UN ELECTIONS AND REPRESENTATION
- Some principal-organ elections are conducted by the GA under Charter and procedural rules.
- Security Council non-permanent members are elected by the GA with equitable geographical distribution as a relevant principle.
- ECOSOC members are elected by the GA under the Charter framework.
- Current regional allocations and election arrangements should be checked for the relevant session.

41. UN BUDGET AND ADMINISTRATION
- UN financing includes assessed and voluntary contributions across different parts of the system.
- Regular-budget and peacekeeping financing are distinct streams with different assessment/administrative arrangements.
- Fifth Committee handles many administrative and budgetary questions.
- MUN budget proposals should identify a plausible funding source rather than assume unlimited UN resources.
- Possible mechanisms include voluntary contributions, trust funds, assessed mechanisms where appropriate, partnerships, technical assistance or studies.

42. HUMANITARIAN RESPONSE
- Humanitarian coordination can involve emergency response, protection, shelter, food, health, water/sanitation, logistics, education and early recovery.
- Common humanitarian principles are humanity, neutrality, impartiality and independence.
- Access can be affected by conflict, security, consent, borders, administrative restrictions and logistics.
- Emergency funding should have transparent allocation, monitoring and reporting.
- Avoid creating instant delivery systems without logistics, implementing partners and access arrangements.

43. SANCTIONS, COUNTER-TERRORISM AND CRIME
- Counter-terrorism policy can span prevention, law enforcement, financing controls, border security, rehabilitation, prosecution and rights protection.
- Comprehensive terrorism definitions and legal treatment vary across international instruments; use the applicable framework.
- Counter-terrorism measures should account for due process, human rights and humanitarian consequences.
- Organized crime, trafficking, cybercrime, corruption and terrorism can overlap but remain distinct policy categories.
- UNODC and Security Council mechanisms have different mandates; identify the correct pathway.

44. PEACEBUILDING AND POST-CONFLICT RECOVERY
- Peacebuilding can address political settlement, institution-building, rule of law, justice, reintegration, livelihoods, reconciliation and prevention of renewed conflict.
- DDR means disarmament, demobilization and reintegration.
- SSR means security-sector reform.
- Transitional justice can include truth-seeking, prosecutions, reparations, institutional reform and memorialization depending on context.
- Sustainable recovery generally requires local ownership, financing, security and functioning institutions.

45. ELECTIONS AND DEMOCRATIC INSTITUTIONS
- International election assistance can involve observation, technical assistance, voter registration support, civic education and institutional strengthening depending on mandate and consent.
- Election observation is distinct from election administration.
- MUN proposals should respect national legal frameworks while addressing participation, accessibility and integrity concerns.
- Do not call an election fraudulent or legitimate without evidence.

46. EDUCATION AND CULTURE
- Education proposals can focus on access, quality, teacher training, digital access, girls’ education, inclusive education and crisis education.
- UNESCO, UNICEF and UNDP have different institutional mandates; identify the relevant expertise.
- Cultural heritage policy can involve protection from conflict damage, illicit trafficking, preservation, documentation and community participation.
- Avoid treating cultures or communities as static stereotypes.

47. MIGRATION, BORDER MANAGEMENT AND HUMAN TRAFFICKING
- Safe/regular migration pathways are distinct from asylum procedures.
- Border management must balance state authority, security and applicable protection obligations.
- Trafficking involves exploitation and defined coercive/abusive means under relevant legal frameworks; smuggling has a different legal structure.
- Anti-trafficking proposals should include victim protection, identification, prosecution, prevention, cooperation and referral systems.

48. TRADE, SANCTIONS AND DEVELOPMENT INTERACTIONS
- Trade restrictions can have security, economic and humanitarian effects.
- Evaluate unintended consequences for civilians, food, medicines, energy and developing economies.
- Humanitarian exemptions can matter under specific sanctions regimes.
- Trade facilitation, customs cooperation and infrastructure can support development but are not universal solutions.

49. UN DOCUMENT RESEARCH SKILLS
- Common document-series prefixes include A/ for General Assembly, S/ for Security Council and E/ for Economic and Social Council.
- Exact document symbols must be verified; do not guess a symbol from memory.
- Resolution numbers and document symbols are different identifiers.
- A MUN draft is not an actual UN document unless actually issued/adopted by the UN.
- When citing a real UN resolution, include organ, resolution number, session/year where relevant and title/subject when available.

50. MUN SPEECH ENGINE
- Opening speech: issue -> national framing -> 2–3 priorities -> cooperation invitation.
- Moderated-caucus speech: narrow problem -> one strong fact/example -> one mechanism -> coalition-oriented close.
- Rebuttal: accurately summarize the opposing proposal -> identify a specific weakness -> explain consequence -> provide an alternative.
- Closing speech: connect final text to mandate, implementation and measurable outcomes.
- Avoid generic country speeches; use country-specific positions only when verified or supplied.

51. MUN NEGOTIATION ENGINE
- Separate must-have clauses, acceptable compromises and red lines.
- Build coalitions around overlapping interests before resolving every disagreement.
- For controversial language, consider narrowing scope, adding safeguards, conditional implementation, reporting/review or softer language where appropriate.
- Merge duplicate clauses to reduce contradictions.
- For every operative clause check actor, action, authority, funding, timeframe and measurable output.
- When blocs disagree, propose a bridge clause that preserves the legitimate objective of both sides.

52. RESOLUTION QUALITY CONTROL
Before finalizing a draft, check:
1. Committee authority.
2. Named actor.
3. Specific action.
4. Feasible implementation.
5. Plausible funding.
6. Monitoring.
7. Duplication.
8. Contradictions.
9. Defined ambiguous terms.
10. Applicable international law.
11. Recommendation vs binding-decision distinction.
12. Verified current facts/country positions.
13. No invented institutions/programmes.
14. Logical connection between preambular and operative sections.

53. COMMON PROCEDURAL CONFUSIONS
- Point of Order concerns procedural/rules compliance, not simply policy disagreement.
- POI rules vary by conference.
- A motion is not an operative clause.
- A working paper is not automatically a draft resolution.
- Co-sponsorship and signatories can mean different things.
- Friendly/unfriendly amendment treatment is conference-specific.
- Consensus is not identical to unanimous voting in every context.
- Abstention is not always equivalent to opposition.
- Quorum is not the same as the number required for passage.
- Chair rulings and appeals depend on the applicable rules.
- Actual UN procedure is not simply parliamentary procedure used at many MUNs.

54. MUN ROLEPLAY ACCURACY
- When simulating a country's delegate, distinguish roleplay from factual statements about the real government.
- Never fabricate an official quotation and attribute it to a real government.
- Hypothetical training speeches should be labelled simulated where needed.
- Historical simulations should constrain claims to the simulation date and avoid importing later events.
- Crisis committees may have fictional facts supplied by the conference; separate those from real-world facts.

55. HISTORICAL CONTEXT
- The UN evolved from wartime international cooperation and the earlier League of Nations experience.
- The Charter entered into force in 1945.
- The UDHR was adopted by the GA in 1948.
- Decolonization greatly expanded UN membership during the twentieth century.
- Cold War politics strongly shaped Security Council dynamics and peacekeeping.
- The post-Cold-War period saw expanded peacekeeping and humanitarian operations and new debates over intervention and sovereignty.
- Historical context should explain institutional development, not substitute for evidence about current policy.

56. LEGAL LANGUAGE QUALITY
- Prefer “under the Charter” over vague phrases like “UN law” when discussing Charter rules.
- Say “the resolution recommends” rather than “the UN requires” when the instrument is recommendatory.
- Say “the Security Council decided” only when the document supports that characterization.
- Say “the court held” for a judgment rather than “the UN decided.”
- Say “the treaty requires states parties” rather than “all countries must” when participation is limited.
- Do not silently change “may” or “can” into “must.”
- For contested legal questions, identify the competing interpretations and relevant authority.

57. POLICY-DESIGN TOOLKIT
Useful mechanisms include prevention, capacity-building, financing, technology/data, institutional coordination, legal/regulatory measures, education/training, monitoring, reporting, evaluation, incentives, accountability, humanitarian safeguards, review/sunset clauses and local ownership.
- Do not force every mechanism into every resolution; choose those relevant to the agenda.

58. COUNTRY ANALYSIS FRAMEWORK
For an assigned country, organize verified information under:
- Government/constitutional structure
- Foreign-policy priorities
- Regional alliances
- Relevant treaties
- UN votes/resolutions
- Security/economic interests
- Relevant development indicators
- Existing national programmes
- Official statements
- Negotiation priorities
- Evidence-supported red lines
- Never fill gaps with stereotypes.

59. COMMITTEE-SPECIFIC CLAUSE CHECK
- DISEC: arms control, verification, confidence-building, disarmament and security cooperation.
- ECOFIN: finance, development, economic coordination and resource mechanisms.
- SOCHUM: rights, protection, social policy and humanitarian safeguards.
- SPECPOL: political/territorial/decolonization frameworks and relevant UN mechanisms.
- Fifth Committee: budgets, administration, staffing and institutional resources.
- Sixth Committee: legal principles, treaties, jurisdiction and legal cooperation.
- UNSC: peace/security, mandate, reporting, sanctions/peacekeeping and veto dynamics.
- ECOSOC: development, economic/social/environmental coordination and partnerships.
- WHO-style committees: public-health authority, health systems, prevention and medical cooperation.
- UNEP-style committees: environmental governance, pollution, ecosystems and climate/environment links.
- UNHRC-style committees: human-rights mechanisms, monitoring, reporting and protection within the body's mandate.

60. RESEARCH-FIRST CURRENT-AFFAIRS RULE
For questions involving “today,” “currently,” “latest,” current conflicts, officeholders, recent votes, sanctions, treaty status, country policy, recent UN resolutions, current humanitarian statistics or recent technical developments:
- Treat this static layer as background only.
- Use current primary/credible sources when research is available.
- Give date/time context for current facts.
- Separate source reporting/analysis from underlying facts.
- Never invent current facts because they sound plausible.

61. ANSWER FORMATS FOR MUN USERS
When useful, structure answers as:
- What the UN framework says
- What the committee can actually do
- What the assigned country needs — verify current position
- Draft clauses
- Likely objections
- Rebuttals
- Research still needed
This keeps institutional facts separate from strategy.

62. MUN PREPARATION WORKFLOW
1. Understand exact agenda wording.
2. Identify committee mandate.
3. Build a one-page issue brief.
4. Research assigned country's official position.
5. Collect 5–10 primary sources.
6. Identify existing UN action and implementation gaps.
7. Identify allies/blockers using evidence.
8. Draft policy priorities.
9. Draft implementable clauses.
10. Prepare opening speech.
11. Prepare objections and answers.
12. Prepare negotiation compromises.
13. Verify every number, quote, treaty and resolution reference before committee.
`.trim()

export function buildUNContext(userPrompt: string) {
  return [
    "Use the following local UN/MUN reference knowledge to ground your answer.",
    "It is a static reference layer: current events, current country positions, exact recent voting records and live statistics still require research.",
    "",
    UN_KNOWLEDGE_BASE,
  ].join("\n")
}
