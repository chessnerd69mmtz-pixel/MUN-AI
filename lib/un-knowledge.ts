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
`.trim()

export function buildUNContext(userPrompt: string) {
  return [
    "Use the following local UN/MUN reference knowledge to ground your answer.",
    "It is a static reference layer: current events, current country positions, exact recent voting records and live statistics still require research.",
    "",
    UN_KNOWLEDGE_BASE,
  ].join("\n")
}
