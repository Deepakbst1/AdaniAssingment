function organizeAwards(awards){
    const prizesMap=new Map();
    awards.forEach(({name,category,research,year})=>{
        const key=`${category}-${year}`;
        

        if(!prizesMap.has(key)){
            prizesMap.set(key,{
                category,
                year,
                winners:[],
            });
        }

        prizesMap.get(key).winners.push({name});
    });


const prizes=[];

for(const [,prize] of prizesMap){
    const totalWinners=prize.winners.length;

    prize.winners.forEach(winner=>(winner.share=1/totalWinners));
    prizes.push(prize);
}
return prizes;

}

const awards = [
    {
      name: 'James Peebles',
      category: 'Physics',
      research: 'Theoretical discoveries in physical cosmology',
      year: 2019,
    },
    {
      name: 'Michel Mayor',
      category: 'Physics',
      research: 'Discovery of an exoplanet orbiting a solar-type star',
      year: 2019,
    },
    {
      name: 'Didier Queloz',
      category: 'Physics',
      research: 'Discovery of an exoplanet orbiting a solar-type star',
      year: 2019,
    },
    {
      name: 'John B. Goodenough',
      category: 'Chemistry',
      research: 'Development of lithium-ion batteries',
      year: 2019,
    },
    {
      name: 'M. Stanley Whittingham',
      category: 'Chemistry',
      research: 'Development of lithium-ion batteries',
      year: 2019,
    },
    {
      name: 'Akira Yoshino',
      category: 'Chemistry',
      research: 'Development of lithium-ion batteries',
      year: 2019,
    },
    {
      name: 'Arthur Ashkin',
      category: 'Physics',
      research: 'Optical tweezers and their application to biological systems',
      year: 2018,
    },
    {
      name: 'Gerard Mourou',
      category: 'Physics',
      research: 'Method of generating high-intensity, ultra-short optical pulses',
      year: 2018,
    },
    {
     name: 'Donna Strickland',
      category: 'Physics',
      research: 'Method of generating high-intensity, ultra-short optical pulses',
      year: 2018,
    },
    {
      name: 'Frances H. Arnold',
      category: 'Chemistry',
      research: 'Directed evolution of enzymes',
      year: 2018,
    },
    {
      name: 'George P. Smith',
      category: 'Chemistry',
      research: 'Phage display of peptides and antibodies.',
      year: 2018,
    },
    {
      name: 'Sir Gregory P. Winter',
      category: 'Chemistry',
      research: 'Phage display of peptides and antibodies.',
      year: 2018,
    },
  ];
   
  // Output
   
  const prizes = [
    {
      category: 'Physics',
      year: 2019,
      winners: [
        { name: 'James Peebles', share: 0.5 },
        { name: 'Michel Mayor', share: 0.25 },
        { name: 'Didier Queloz', share: 0.25 },
      ],
    },
    {
      category: 'Chemistry',
      year: 2019,
      winners: [
        { name: 'John B. Goodenough', share: 0.3333 },
        { name: 'M. Stanley Whittingham', share: 0.3333 },
        { name: 'Akira Yoshino', share: 0.3333 },
      ],
    },
    {
      category: 'Physics',
      year: 2018,
      winners: [
        { name: 'Arthur Ashkin', share: 0.5 },
        { name: 'Gerard Mourou', share: 0.25 },
        { name: 'Donna Strickland', share: 0.25 },
      ],
    },
    {
      category: 'Chemistry',
      year: 2018,
      winners: [
        { name: 'Frances H. Arnold', share: 0.5 },
        { name: 'George P. Smith', share: 0.25 },
        { name: 'Sir Gregory P. Winter', share: 0.25 },
      ],
    },
  ];

  console.log(organizeAwards);

