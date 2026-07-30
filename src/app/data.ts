import type { NewsItem, EventItem, FaqItem } from "./types";

export const NEWS: NewsItem[] = [
  {
    id: 1,
    title: "UniAbuja Ranked Among Top 10 Federal Universities by NUC",
    date: "July 8, 2026",
    excerpt:
      "The National Universities Commission has ranked the University of Abuja among Nigeria's top 10 federal universities for research output and academic quality in its 2026 assessment.",
    image:
      "https://images.unsplash.com/photo-1716654716702-7a5c64ecd8a5?w=600&h=400&fit=crop&auto=format",
    tag: "Ranking",
  },
  {
    id: 2,
    title: "New MOU Signed with University of Lagos and ABU Zaria",
    date: "June 22, 2026",
    excerpt:
      "The University of Abuja has signed a Memorandum of Understanding with UNILAG and ABU Zaria to share research resources, co-supervise postgraduate students, and jointly publish interdisciplinary journals.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop&auto=format",
    tag: "Partnership",
  },
  {
    id: 3,
    title: "Call for Papers: Abuja Journal of Publishing Studies Vol. 2",
    date: "June 10, 2026",
    excerpt:
      "Submissions are now open for the second volume of the Abuja Journal of Publishing Studies. We welcome original research on publishing practice, media economics, and knowledge production in Nigeria and West Africa.",
    image:
      "https://images.unsplash.com/photo-1716654716589-62219dcd47d3?w=600&h=400&fit=crop&auto=format",
    tag: "Call for Papers",
  },
];

export const EVENTS: EventItem[] = [
  {
    id: 1,
    title: "UIIPS Annual Research Symposium 2026",
    month: "Aug",
    day: "14",
    fullDate: "14 August 2026",
    time: "9:00 AM – 5:00 PM",
    location: "Senate Building, Main Campus",
    type: "Symposium",
    desc: "An annual gathering of UIIPS faculty, Master's students, and visiting scholars to present and discuss current research in publishing studies, media economics, and African knowledge production.",
    free: true,
  },
  {
    id: 2,
    title: "Workshop: Open-Access Publishing in Nigerian Academia",
    month: "Aug",
    day: "22",
    fullDate: "22 August 2026",
    time: "10:00 AM – 2:00 PM",
    location: "Faculty of Arts Auditorium",
    type: "Workshop",
    desc: "A hands-on workshop introducing students and early-career academics to open-access publishing platforms, DOI registration, and manuscript preparation for international journals.",
    free: true,
  },
  {
    id: 3,
    title: "Postgraduate Colloquium: Publishing Research Methods",
    month: "Sep",
    day: "5",
    fullDate: "5 September 2026",
    time: "11:00 AM – 3:00 PM",
    location: "Online + Gwagwalada Campus",
    type: "Colloquium",
    desc: "A hybrid colloquium for current UIIPS Master's students to present their research projects and receive structured feedback from supervisors and peers.",
    free: true,
  },
  {
    id: 4,
    title: "West Africa Academic Publishing Conference",
    month: "Sep",
    day: "18",
    fullDate: "18–20 September 2026",
    time: "9:00 AM – 6:00 PM",
    location: "UniAbuja International Conference Centre",
    type: "Conference",
    desc: "A flagship three-day international conference bringing together publishers, academics, librarians, and policymakers from across West Africa to address the future of academic knowledge production.",
    free: false,
  },
  {
    id: 5,
    title: "Open Day — UIIPS Information Session",
    month: "Oct",
    day: "3",
    fullDate: "3 October 2026",
    time: "10:00 AM – 4:00 PM",
    location: "Faculty of Arts Building, Gwagwalada",
    type: "Open Day",
    desc: "Prospective students and their families are invited to learn about the 12-month professional Master's in Publishing Studies, meet faculty, and tour the institute's facilities.",
    free: true,
  },
  {
    id: 6,
    title: "Distinguished Lecture: The Future of Publishing in Africa",
    month: "Oct",
    day: "21",
    fullDate: "21 October 2026",
    time: "2:00 PM – 4:00 PM",
    location: "Senate Building Auditorium",
    type: "Lecture",
    desc: "A distinguished lecture by a leading figure in African academic publishing, open to all staff, students, and the public. Organised by UIIPS in partnership with the Faculty of Arts.",
    free: true,
  },
];

export const FAQS: FaqItem[] = [
  {
    q: "What is the University of Abuja International Institute for Publishing Studies (UIIPS)?",
    a: "The University of Abuja International Institute for Publishing Studies (UIIPS) is a professional postgraduate institute established on April 12, 2024, by Vice-Chancellor Prof. Abdul-Rasheed Na'Allah. It was created to train professional manpower and improve publishing standards in Nigeria and across Africa. UIIPS offers a 12-month professional Master's Degree in Publishing Studies.",
  },
  {
    q: "When was UIIPS established and who founded it?",
    a: "UIIPS was formally launched on April 12, 2024, by the Vice-Chancellor of the University of Abuja, Prof. Abdul-Rasheed Na'Allah. The University of Abuja itself was established on January 1, 1988, by an act of the Federal Government of Nigeria.",
  },
  {
    q: "What programme does UIIPS offer?",
    a: "UIIPS offers a 12-month professional Master's Degree in Publishing Studies. This is a full-time, intensive programme designed to equip publishing professionals with advanced editorial, digital, business, and policy skills. The programme is professionally oriented and designed for working professionals and recent graduates seeking careers in publishing.",
  },
  {
    q: "Is the programme accredited by the NUC?",
    a: "Yes. The UIIPS Master's in Publishing Studies has received accreditation from the National Universities Commission (NUC). The programme was developed in alignment with NUC guidelines for postgraduate professional programmes at Nigerian federal universities.",
  },
  {
    q: "What are the entry requirements for the Master's programme?",
    a: "Applicants must hold a minimum of a Second Class Lower (2:2) Bachelor's degree from a recognised Nigerian or foreign university in any discipline. Candidates with strong professional experience in publishing, media, communications, or a related field may be considered even where their undergraduate discipline is outside the humanities or social sciences. A statement of purpose and two references are also required.",
  },
  {
    q: "How long is the programme and how is it structured?",
    a: "The programme runs for 12 months full-time, structured across three terms. The first two terms cover taught modules in editorial practice, digital publishing, publishing economics, media law, rights and licensing, and African publishing history. The third term is dedicated to a professional project or dissertation of 10,000–15,000 words, typically undertaken in partnership with a Nigerian or international publishing organisation.",
  },
  {
    q: "Does the University of Abuja offer accommodation on campus?",
    a: "The University of Abuja has limited on-campus hostel facilities at the Gwagwalada campus. Allocation is competitive and prioritised for first-year students. UIIPS students are advised to apply for accommodation early through the Students' Affairs Division. Off-campus housing is widely available in Gwagwalada town.",
  },
  {
    q: "Are there scholarships available for UIIPS students?",
    a: "The Federal Government Scholarship Board (FGSB) awards are open to students at all federal universities, including UIIPS Master's students. The Tertiary Education Trust Fund (TETFund) also supports postgraduate study at Nigerian universities. UIIPS is actively working with industry partners to establish dedicated publishing scholarships for incoming students.",
  },
  {
    q: "What career paths are available after the Master's?",
    a: "UIIPS graduates pursue careers as editors, publishers, literary agents, journal managers, content strategists, copyright officers, digital publishing executives, and academic press administrators. The programme's industry project component ensures graduates leave with both a professional qualification and real-world publishing experience recognised by Nigerian and African employers.",
  },
  {
    q: "How do I contact UIIPS directly?",
    a: "You can reach the institute at uiips@uniabuja.edu.ng or by calling the administrative office at +234 (0) 9 670 8200. The institute is located in the Faculty of Arts Building, Gwagwalada Campus, University of Abuja.",
  },
];
