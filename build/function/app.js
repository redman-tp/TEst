const app = Vue.createApp({
  data() {
    return {
      carousel: [
        { image: "resources/carousel/cs-1.jpg" },
        { image: "resources/carousel/cs-2.jpg" },
        { image: "resources/carousel/cs-3.jpg" },
        { image: "resources/carousel/cs-4.jpg" },
        { image: "resources/carousel/cs-5.jpg" },
      ],
      companyhighlights: [
        {
          image: "public/companyhighlights/1.png",
          text: "Agricultural credit advisory",
        },
        {
          image: "public/companyhighlights/2.png",
          text: "Agricultural Finance consultancy",
        },
        {
          image: "public/companyhighlights/3.png",
          text: "Risk Assessment and Credit Risk",
        },
        {
          image: "public/companyhighlights/4.png",
          text: "Business Incubation and Mentorship",
        },
        {
          image: "public/companyhighlights/5.png",
          text: "Preparing Rural Farmers Readiness to secure loans",
        },
        {
          image: "public/companyhighlights/6.png",
          text: "Agricultural Project Management",
        },
        { image: "public/companyhighlights/7.png", text: "Advocacy" },
        { image: "public/companyhighlights/8.png", text: "Research" },
        { image: "public/companyhighlights/9.png", text: "Training" },
        {
          image: "public/companyhighlights/10.png",
          text: "Technical Assistance at different levels of the Agricultural value chain",
        },
      ],
      pastwork: [
        {
          image: "public/pastwork/s1.jpg",
          text: "Delivery of fertilizers and pesticides to farmers to prevent the destruction of plants from pests & parasites",
          modaltext:
            "BlueBrain Agro & Allied Services as a grass root Agro-allied company, supports farmers with agricultural inputs (fertilizer, herbicides, pesticides, aflasafe to deal with Aflatoxin) and extension service delivery both onsite and off-sight through our seasoned extension, agents, to consistently have a maximum yield in every cropping season. We have provided these services in Kaduna, Benue, Abuja, etc. in our various projects.",
        },
        {
          image: "public/pastwork/s1.jpg",
          text: "We provide Monitoring, Evaluation, and Learning Services",
          modaltext:
            "We design and implement gender-sensitive, results-based, and digital-driven MEL systems that ensure vital feedback routes and learning mechanisms. Our MEL services are driven by innovation and technological tools to ensure high-quality of data, optimum efficiency, and evidence-based impact/result. We have provided evidence-based Mel services for various projects funded by NGOs, and the government. These projects include the WOFAN ICON 2 project, SCL Project Juriya, etc.",
        },
        {
          image: "public/pastwork/s1.jpg",
          text: "We support and guide farmers through Good Agronomic Practice (GAP) of Agricultural Value Chain products",
          modaltext:
            "Our support to farmers includes the provision of innovative techniques, strategies, and practices for farm management, such as planting, fertilization, pest control, irrigation, and harvest. Our GAP services promote the safe and sustainable production of crops and livestock and improve food safety and quality, environmental sustainability, and social welfare. This helps farm owners to maximize yields, optimize business operations, and minimize production costs and environmental impact. We have provided these services in our Agrolog project and supported other projects in this regard as service providers.",
        },
        {
          image: "public/pastwork/s1.jpg",
          text: "Agricultural extension services, training, and cooperative development support",
          modaltext:
            "BlueBrain Agro & Allied Services will work with the state and select experienced ecosystem actors in the identified focus value chains to co-create intervention proposals for partnerships with leading donor agencies and/or co-funding with the government as well as prepare farmers to secure loan.",
        },
        {
          image: "public/pastwork/s1.jpg",
          text: "Co-create funding interventions",
          modaltext:
            "We are also inclined to the business of trading, marketing, sales, and distribution of agricultural goods, commission agents, manufacturer’s representatives, general suppliers, and contractors. We are reputed for the exportation of agricultural produce from our farmers, suppliers, processors, and marketers in the Agricultural Commodity Value Chain.",
        },
        {
          image: "public/pastwork/s1.jpg",
          text: "Agricultural product aggregation, haulage & transportation, trading, and market development",
          modaltext:
            "BlueBrain Agro & Allied Services will conduct an institutional capability assessment of project implementing partners to establish areas of strengthening to improve capacity to implement and manage projects.",
        },
        {
          image: "public/pastwork/s1.jpg",
          text: "Institutional Capacity Development & Enhancement",
          modaltext:
            "BlueBrain Agro & Allied Services will conduct an institutional capability assessment of project implementing partners to establish areas of strengthening to improve capacity to implement and manage projects.",
        },
        {
          image: "public/pastwork/s1.jpg",
          text: "Research, Business incubation and technology solutions",
          modaltext:
            "BlueBrain Agro & Allied Services will ensure full technology deployment as an enabler to efficient and effective project management that enables transparency, and high-quality data for monitoring, evaluation, reporting and development planning. BlueBrain Agro & Allied Services will carry out additional on-site and off-site activities (where required) to produce real-time and human-specific results. In addition, BlueBrain Agro & Allied Services will hold focus groups for data collection, formative assessments, and commentaries from a selected group of rural dwellers from the three zones who will provide feedback on the status, challenges, and potential solutions in the livestock sub-sector. Summative evaluations will be further developed to determine the components that BlueBrain Agro & Allied Services thinks will enhance livestock development in Kaduna state.",
        },
      ],
      team: [
        { name: "Ms. Lois B. Sankey", image: "public/team/image1.jpg" },
        { name: "Dr. Godswill Egbe", image: "public/team/image3.jpg" },
        { name: "Mr. Gerald Umeze", image: "public/team/image4.jpg" },
        { name: "Mr. Godson Chika Ohuruogu", image: "public/team/image5.jpg" },
        {
          name: "Alh. Abubakar Kolo Ndakpoto",
          image: "public/team/image6.jpg",
        },
        {
          name: "Professor Elisha Sambo Banake",
          image: "public/team/image7.jpg",
        },
        { name: "Mr. Stanley Nwachukwu", image: "public/team/image8.jpg" },
        {
          name: "Dr. Awogbemi Clement Adeyeye",
          image: "public/team/image9.jpg",
        },
        { name: "Mrs. Chinwe Ogbonna", image: "public/team/image2.jpg" },
      ],
    }
  },
  methods: {
    openmodal(item) {
      var modal = document.getElementById("modal")
      modal.classList.remove("top-full")
      modal.classList.add("top-0")
      document.getElementById("modaltext").textContent = item.modaltext
    },
  },
})

app.mount("#main")
