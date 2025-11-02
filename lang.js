/* Simple i18n for LensClick: supports 'pt' and 'en'.
   - Use data-i18n="key" on elements to translate textContent (or innerHTML when data-i18n-html="true").
   - Use data-i18n-placeholder="key" on inputs to translate placeholder.
   - Use data-i18n-section="key" on section indicators to update their data-section attribute (used by CSS).
   - Title elements can use <title data-i18n="key">.
   Saves selection in localStorage.lang.
*/
(function(){
  const translations = {
    pt: {
      'footer': '© 2025 Lens Click. Todos os direitos reservados',
      'privacy': 'Política de Privacidade',
      'terms': 'Termos de Uso',
  'contact.form.name.placeholder': 'Seu nome completo',
  'contact.form.phone.placeholder': '(11) 12345-6789',
  'contact.form.email.placeholder': 'seu@email.com',
  'contact.form.date.placeholder': 'dd/mm/aaaa',
  'contact.form.message.placeholder': 'Conte mais sobre seu projeto, suas expectativas e o que achar importante.',
      // Nav
      'nav.home': 'Home',
      'nav.about': 'Sobre',
      'nav.services': 'Serviços',
      'nav.portfolio': 'Portfólio',
      'nav.contact': 'Contato',
      'nav.reviews': 'Avaliações',
      'nav.faq': 'FAQ',

      // Auth
      'auth.login': 'Entrar',
      'auth.signup': 'Cadastrar',

      // Sections (indicator)
      'section.home': 'Home',
      'section.about': 'Sobre',
      'section.services': 'Serviços',
      'section.portfolio': 'Portfólio',
      'section.contact': 'Contato',
      'section.reviews': 'Avaliações',
      'section.faq': 'FAQ',

      // Hero
      'hero.title1': 'CAPTURANDO <span class="gradient-text">MOMENTOS</span>',
      'hero.lead': 'Serviços profissionais de fotografia que transformam momentos fugazes em memórias eternas.',
      'hero.cta.view': 'VER PORTFÓLIO',
      'hero.cta.contact': 'ENTRE EM CONTATO',
  // Additional hero slides
  'hero.slide2.title': 'MOMENTOS <span class="gradient-text">ÚNICOS</span>',
  'hero.slide2.lead': 'Transformamos cada ocasião especial em uma coleção de imagens que contarão sua história para sempre.',
  'hero.slide2.cta.services': 'NOSSOS SERVIÇOS',
  'hero.slide2.cta.about': 'SOBRE NÓS',
  'hero.slide3.title': 'HISTÓRIAS DE <span class="gradient-text">AMOR</span>',
  'hero.slide3.lead': 'Especialistas em capturar a emoção e a beleza dos momentos mais importantes da sua vida.',
  'hero.slide3.cta.book': 'AGENDE AGORA',
  'hero.slide3.cta.reviews': 'AVALIAÇÕES',

      // Contact
      'contact.title': 'ENTRE EM <span class="gradient-text">CONTATO</span>',
      'contact.tabs.form': 'Formulário',
      'contact.tabs.info': 'Informações',
      'contact.tabs.newsletter': 'Newsletter',
      'contact.form.submit': 'ENVIAR MENSAGEM',

      // Signup
      'signup.pageTitle': 'Cadastro | LensClick',
      'signup.title': 'Criar <span class="gradient-text">Conta</span>',
      'signup.lead': 'Junte-se à nossa comunidade de amantes da fotografia',
      'signup.name.label': 'Nome Completo',
      'signup.name.placeholder': 'Seu nome completo',
      'signup.email.label': 'E-mail',
      'signup.email.placeholder': 'seu@email.com',
      'signup.phone.label': 'Telefone',
    'signup.phone.placeholder': '(11) 12345-6789',
      'signup.password.label': 'Senha',
      'signup.password.placeholder': 'Crie uma senha segura',
      'signup.confirm.label': 'Confirmar Senha',
      'signup.confirm.placeholder': 'Digite novamente sua senha',
      'signup.submit': 'Criar Conta',
      'signup.success': 'Cadastro realizado com sucesso! Redirecionando...',
      'signup.haveAccount': 'Já tem uma conta? <a href="login.html" class="auth-link">Fazer login</a>',
      'signup.loginLink': 'Fazer login',
      'signup.back': 'Voltar ao site',
  // Profile
  'profile.title': 'Perfil | LensClick',
  'profile.greeting': 'Bem-vindo,',
  'profile.emailLabel': 'E-mail',
  'profile.phoneLabel': 'Telefone',
  'profile.logout': 'Sair',
  'profile.nameLabel': 'Nome',
  'profile.roleLabel': 'Você é',
  'profile.role.client': 'Cliente',
  'profile.role.photographer': 'Fotógrafo',
  'profile.ageLabel': 'Idade',
  'profile.genderLabel': 'Gênero',
  'profile.gender.male': 'Masculino',
  'profile.gender.female': 'Feminino',
  'profile.gender.other': 'Outro',
  'profile.save': 'Salvar',
  'profile.addPhoto': 'Adicionar foto',
  'profile.noImage': 'Adicione uma imagem pro seu perfil',
  'profile.backToSite': 'Voltar ao site',

      // Login
      'login.pageTitle': 'Login | LensClick',
      'login.title': 'Entrar na <span class="gradient-text">LensClick</span>',
      'login.lead': 'Acesse sua conta para gerenciar seus agendamentos',
      'login.email.label': 'E-mail',
      'login.email.placeholder': 'seu@email.com',
      'login.password.label': 'Senha',
      'login.password.placeholder': 'Sua senha',
      'login.submit': 'Entrar',
      'login.success': 'Login realizado com sucesso! Redirecionando...',
      'login.signupLink': 'Cadastre-se',
      'login.back': 'Voltar ao site',
      
  // About
  'about.title': 'SOBRE <span class="gradient-text">NÓS</span>',
  'about.historyTitle': 'NOSSA <span class="gradient-text">HISTÓRIA</span>',
  'about.p1': 'Fundada em 2025, a Lens Click nasceu de uma ideia de um grupo de estudantes que uniram problemas de pessoas que queriam registrar seus momentos e não sabiam como escolher, à solução de um site pela Lens Click.',
  'about.p2': 'Acreditamos que cada pessoa, cada casal, cada família tem uma história única para contar. Nossa missão é capturar essas histórias de forma autêntica e artística, criando um legado visual que será valorizado por gerações.',

  // Stats
  'stats.projects': 'Projetos realizados',
  'stats.months': 'Meses de experiência',
  'stats.couples': 'Casais felizes',
  'stats.events': 'Eventos cobertos',

  // Services
  'services.portrait': 'Ensaios de Retrato',
  'services.from': 'A partir de',
  'services.portrait.f1': 'Sessão de 1h',
  'services.portrait.f2': '20 fotos editadas',
  'services.portrait.f3': 'Orientação de poses',
  'services.portrait.f4': 'Local à escolha',
  'services.wedding': 'Fotografia de Casamento',
  'services.wedding.f1': 'Cobertura',
  'services.wedding.f2': 'Álbum digital',
  'services.wedding.f3': 'Fotos espontâneas',
  'services.wedding.f4': 'Sessão pós-casamento',
  'services.events': 'Fotografia de Eventos',
  'services.range': 'Entre',
  'services.events.f1': 'Cobertura completa',
  'services.events.f2': 'Fotos em alta resolução',
  'services.events.f3': 'Galeria Online',
  'services.events.f4': 'Suporte total',
  'services.commercial': 'Fotografia Comercial',
  'services.commercial.f1': 'Fotos de produtos',
  'services.commercial.f2': 'Pacotes corporativos',
  'services.commercial.f3': 'Ensaios comerciais',
  'services.commercial.f4': 'Uso comercial',
  'services.request': 'Solicitar orçamento',

  // Quotes
  'quotes.q1': '"Cada clique conta uma história única"',
  'quotes.q2': '"A arte de eternizar momentos"',
  'quotes.q3': '"Transformando o tempo em memórias"',
  'quotes.q4': '"Onde emoções se tornam mais do que fotos"',

  // Portfolio filters
  'filter.all': 'Tudo',
  'filter.retratos': 'Retratos',
  'filter.weddings': 'Casamentos',
  'filter.events': 'Eventos',
  'filter.commercial': 'Comercial',

  // Contact (tabs already present above)

  // Portfolio lead
  'portfolio.lead': 'Serviços profissionalizados de fotografia que transformam <b><span class="gradient-text">momentos únicos</span></b> em memórias <b><span class="gradient-text">eternas</span></b>.',

  // Contact / Form
  'contact.lead': 'Cada projeto é único e especial para nós. Adoraríamos ouvir sua visão e como podemos ajudar a transformá-la em realidade através da fotografia.',
  'contact.form.selectService': 'Selecione o serviço desejado',
  'contact.info.locationLabel': 'Localização',
  'contact.info.location': 'São Paulo, SP',
  'contact.hoursTitle': 'HORÁRIOS DE <span class="gradient-text">ATENDIMENTO</span>',
  'contact.studiosTitle': 'NOSSOS <span class="gradient-text">ESTÚDIOS</span>',

  // Newsletter / footer
  'newsletter.lead': 'Receba dicas de fotografia, promoções exclusivas e novidades sobre nossos serviços diretamente no seu email.',
  'newsletter.tipTitle': 'Dicas profissionais',
  'newsletter.tipLead': 'Conteúdo exclusivo sobre fotografia',
  'newsletter.firstTitle': 'Primeiro a saber',
  'newsletter.firstLead': 'Novidades e lançamentos',
  'newsletter.cta': 'Inscreva-se agora e receba um e-book gratuito com "10 Dicas Profissionais para Fotos Incríveis".',
  'newsletter.privacyNote': 'Seus dados estão protegidos e não serão compartilhados.',

  // Reviews
  'reviews.title': 'AVALIAÇÕES',

  // FAQ
  'faq.title': 'PERGUNTAS <span class="gradient-text">FREQUENTES</span>',
  'faq.q1': 'Qual o prazo de entrega?',
  'faq.a1': 'Entre 7 e 20 dias úteis, dependendo do serviço contratado e da quantidade de fotos.',
  'faq.q2': 'Como funciona o pagamento?',
  'faq.a2': 'Aceitamos PIX, cartão e boleto. Geralmente 30% na reserva e o restante na entrega.',
  'faq.q3': 'Posso escolher as fotos que serão editadas?',
  'faq.a3': 'Sim! Enviamos uma galeria para seleção e, a partir dela, seguimos com a edição final.',
  'faq.q4': 'Vocês oferecem álbuns físicos e virtuais?',
  'faq.a4': 'Oferecemos ambos. Temos diferentes formatos e acabamentos para você escolher.',
  'faq.q5': 'Como é feito a entrega das fotos?',
  'faq.a5': 'Por galeria online com link protegido e opção de download. Para pacotes premium, também em pendrive.',
  'faq.q6': 'Vocês têm seguro para os equipamentos?',
  'faq.a6': 'Sim, todo o nosso equipamento é segurado para garantir a continuidade do trabalho.',
  'faq.q7': 'Vocês fazem ensaios externos?',
  'faq.a7': 'Fazemos sim. Podemos sugerir locais ou realizar no lugar de sua preferência.',
  'faq.q8': 'Como funciona o agendamento de um ensaio?',
  'faq.a8': 'Entre em contato pelo formulário informando a data desejada. Confirmamos disponibilidade e fechamos os detalhes.',

  // Privacy / Terms
  'privacy.title': 'Política de Privacidade',
  'privacy.back': 'Voltar ao site',
  'terms.title': 'Termos de Uso',
  'terms.back': 'Voltar ao site'
      ,
      // Reviews
      'review.r1.name': 'Maurício e Maria — Casamento',
      'review.r1.text': 'A Lens Click capturou perfeitamente a magia do nosso casamento. Cada foto conta uma história e nos emociona até hoje. Profissionalismo e talento excepcionais!',
      'review.r2.name': 'Empresa TechStart — Fotografia Corporativa',
      'review.r2.text': 'Precisávamos de fotos profissionais para nosso equipe e o resultado superou todas as expectativas. Recomendamos a todos!',
      'review.r3.name': 'Marina Mendes — Ensaio individual',
      'review.r3.text': 'Uma experiência incrível! Me senti confiante e as fotos ficaram maravilhosas.',
      'review.r4.name': 'Rafael e Sofia — Pré-casamento',
      'review.r4.text': 'O ensaio pré-casamento foi incrível! A equipe nos deixou super confortáveis e as fotos ficaram de tirar o fôlego.'
    },
    en: {
      'footer': '© 2025 Lens Click. All rights reserved',
      'privacy': 'Privacy Policy', 
      'terms': 'Terms of Use',
      'terms.title': 'Terms of Use',
  'terms.p1': 'These Terms of Use govern access to and use of the Lens Click website and its photography services. By using our site, you agree to the conditions below.',
  'terms.sec1.title': '1. Services',
  'terms.sec1.li1': 'Lens Click offers professional photography services, scheduling, quotes, and information via the website.',
  'terms.sec1.li2': 'Details of each service, prices, and conditions are provided before contracting.',
  'terms.sec2.title': '2. Site Use',
  'terms.sec2.li1': 'The user agrees to provide true and updated information in the forms.',
  'terms.sec2.li2': 'It is forbidden to use the site for illicit, offensive purposes or that violate third-party rights.',
  'terms.sec3.title': '3. Intellectual Property',
  'terms.sec3.li1': 'All site content, including texts, images, logos, and photographs, belongs to Lens Click or its partners and is protected by copyright.',
  'terms.sec3.li2': 'Reproduction, distribution, or commercial use without prior authorization is prohibited.',
  'terms.sec4.title': '4. Privacy',
  'terms.sec4.p': 'The processing of personal data follows our <a href="privacidade.html">Privacy Policy</a>.',
  'terms.sec5.title': '5. Limitation of Liability',
  'terms.sec5.li1': 'Lens Click is not responsible for damages resulting from technical failures, unavailability, or improper use of the site.',
  'terms.sec5.li2': 'The site may contain links to third-party sites, for which we are not responsible.',
  'terms.sec6.title': '6. Changes to Terms',
  'terms.sec6.p': 'These terms may be updated at any time. We recommend that you review them periodically.',
  'terms.sec7.title': '7. Contact',
  'terms.sec7.p': 'For questions about the terms, contact us at <a href="mailto:lensclick@gmail.com">lensclick@gmail.com</a>.',
  'terms.footer': '© 2025 Lens Click. All rights reserved | <a href="privacidade.html">Privacy Policy</a> | <a href="termos.html">Terms of Use</a>',
  'privacy.p1': 'Lens Click values the privacy of its clients and visitors. This Privacy Policy explains how we collect, use, protect, and share your personal information when using our site and services.',
  'privacy.sec1.title': '1. Information Collected',
  'privacy.sec1.li1': '<b>Information provided by the user:</b> Name, email, phone, contact details, and project details sent via forms.',
  'privacy.sec1.li2': '<b>Browsing information:</b> Data such as IP address, browser type, pages accessed, and visit duration.',
  'privacy.footer': '© 2025 Lens Click. All rights reserved | <a href="privacidade.html">Privacy Policy</a> | <a href="termos.html">Terms of Use</a>',
  'privacy.sec2.title': '2. Use of Information',
  'privacy.sec2.li1': 'Respond to questions, requests, and quotes.',
  'privacy.sec2.li2': 'Improve our services and user experience.',
  'privacy.sec2.li3': 'Send communications, news, and promotions (with consent).',
  'privacy.sec3.title': '3. Data Sharing',
  'privacy.sec3.p': 'We do not share your personal information with third parties, except when necessary for providing contracted services or required by law.',
  'privacy.sec4.title': '4. Security',
  'privacy.sec4.p': 'We adopt technical and administrative measures to protect your data against unauthorized access, loss, or improper disclosure.',
  'privacy.sec5.title': '5. Cookies',
  'privacy.sec5.p': 'We use cookies to improve navigation and personalize your experience. You can disable cookies in your browser settings.',
  'privacy.sec6.title': '6. User Rights',
  'privacy.sec6.li1': 'Access, correction, or deletion of your personal data.',
  'privacy.sec6.li2': 'Request information about data processing.',
  'privacy.sec6.li3': 'Revoke consent for communications.',
  'privacy.sec7.title': '7. Policy Changes',
  'privacy.sec7.p': 'This policy may be updated periodically. We recommend that you review this page regularly.',
  'privacy.sec8.title': '8. Contact',
  'privacy.sec8.p': 'For privacy questions, contact us at <a href="mailto:lensclick@gmail.com">lensclick@gmail.com</a>.',
  'newsletter.submit': 'SIGN UP',
  'newsletter.emailPlaceholder': 'Your best email',
  'newsletter.proTitle': 'Pro tips',
  'newsletter.proLead': 'Exclusive photography content',
  'newsletter.firstTitle': 'Be the first to know',
  'newsletter.firstLead': 'News and launches',
  'newsletter.title': 'SIGN UP FOR OUR <span class="gradient-text">NEWSLETTER</span>',
  'newsletter.specials': 'Stay up to date with all our news and special offers!',
  'contact.hours.week': 'Monday – Friday: 9am to 6pm',
  'contact.hours.sat': 'Saturday: 9am to 2pm',
  'contact.hours.sun': 'Sunday: Closed',
  'contact.info.title': 'OUR <span class="gradient-text">CONTACTS</span>',
  'contact.info.lead': 'We are always available to answer your questions and discuss your next photography project.',
  'contact.info.emailLabel': 'Email',
  'contact.info.phoneLabel': 'Phone',
  'login.noAccount': "Don't have an account?",
  'footer.copyright': '© 2025 Lens Click. All rights reserved',
  'contact.form.service.portrait': 'Portrait',
  'contact.form.service.wedding': 'Wedding',
  'contact.form.service.event': 'Event',
  'contact.form.service.commercial': 'Commercial',
  // Contact form labels and placeholders
  'contact.form.name': 'NAME *',
  'contact.form.name.placeholder': 'Your full name',
  'contact.form.phone': 'PHONE',
  'contact.form.phone.placeholder': '(11) 12345-6789',
  'contact.form.email': 'E-MAIL *',
  'contact.form.email.placeholder': 'you@email.com',
  'contact.form.service': 'TYPE OF SERVICE',
  'contact.form.date': 'EVENT DATE',
  'contact.form.date.placeholder': 'dd/mm/yyyy',
  'contact.form.message': 'MESSAGE *',
  'contact.form.message.placeholder': 'Tell us more about your project, expectations, and anything important.',
  // Nav
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.services': 'Services',
      'nav.portfolio': 'Portfolio',
      'nav.contact': 'Contact',
      'nav.reviews': 'Reviews',
      'nav.faq': 'FAQ',

      // Auth
      'auth.login': 'Login',
      'auth.signup': 'Sign up',

  // Sections
  'section.home': 'Home',
  'section.about': 'About',
  'section.services': 'OUR <span class="gradient-text">SERVICES</span>',
  'section.portfolio': 'OUR <span class="gradient-text">PORTFOLIO</span>',
  'section.contact': 'Contact',
  'section.reviews': 'Reviews',
  'section.faq': 'FAQ',

      // Hero
      'hero.title1': 'CAPTURING <span class="gradient-text">MOMENTS</span>',
      'hero.lead': 'Professional photography services that turn fleeting moments into lasting memories.',
      'hero.cta.view': 'VIEW PORTFOLIO',
      'hero.cta.contact': 'GET IN TOUCH',
  // Additional hero slides
  'hero.slide2.title': '<span style="color:#fff">UNIQUE</span> <span class="gradient-text">MOMENTS</span>',
  'hero.slide2.lead': 'We turn each special occasion into a collection of images that will tell your story forever.',
  'hero.slide2.cta.services': 'OUR SERVICES',
  'hero.slide2.cta.about': 'ABOUT US',
  'hero.slide3.title': 'STORIES OF <span class="gradient-text">LOVE</span>',
  'hero.slide3.lead': 'Experts at capturing the emotion and beauty of life\'s most important moments.',
  'hero.slide3.cta.book': 'BOOK NOW',
  'hero.slide3.cta.reviews': 'REVIEWS',

      // Contact
      'contact.title': 'GET IN <span class="gradient-text">TOUCH</span>',
      'contact.tabs.form': 'Form',
      'contact.tabs.info': 'Info',
      'contact.tabs.newsletter': 'Newsletter',
      'contact.form.submit': 'SEND MESSAGE',

      // Signup
      'signup.pageTitle': 'Sign up | LensClick',
      'signup.title': 'Create an <span class="gradient-text">Account</span>',
      'signup.lead': 'Join our community of photography lovers',
      'signup.name.label': 'Full name',
      'signup.name.placeholder': 'Your full name',
      'signup.email.label': 'Email',
      'signup.email.placeholder': 'you@email.com',
      'signup.phone.label': 'Phone',
  'signup.phone.placeholder': '(11) 12345-6789',
      'signup.password.label': 'Password',
      'signup.password.placeholder': 'Create a secure password',
      'signup.confirm.label': 'Confirm Password',
      'signup.confirm.placeholder': 'Type your password again',
      'signup.submit': 'Create Account',
      'signup.success': 'Account created! Redirecting...',
      'signup.haveAccount': 'Already have an account? <a href="login.html" class="auth-link">Login</a>',
      'signup.loginLink': 'Login',
      'signup.back': 'Back to site',

      // Login
      'login.pageTitle': 'Login | LensClick',
      'login.title': 'Sign in to <span class="gradient-text">LensClick</span>',
      'login.lead': 'Access your account to manage bookings',
      'login.email.label': 'Email',
      'login.email.placeholder': 'you@email.com',
      'login.password.label': 'Password',
      'login.password.placeholder': 'Your password',
      'login.submit': 'Sign in',
      'login.success': 'Login successful! Redirecting...',
      'login.signupLink': 'Sign up',
      'login.back': 'Back to site',

  // Profile
  'profile.title': 'Profile | LensClick',
  'profile.greeting': 'Welcome,',
  'profile.emailLabel': 'Email',
  'profile.phoneLabel': 'Phone',
  'profile.logout': 'Log out',
  'profile.nameLabel': 'Name',
  'profile.roleLabel': 'You are',
  'profile.role.client': 'Client',
  'profile.role.photographer': 'Photographer',
  'profile.ageLabel': 'Age',
  'profile.genderLabel': 'Gender',
  'profile.gender.male': 'Male',
  'profile.gender.female': 'Female',
  'profile.gender.other': 'Other',
  'profile.save': 'Save',
  'profile.addPhoto': 'Add photo',
  'profile.noImage': 'Add a profile photo',
  'profile.backToSite': 'Back to site',

  // About
  'about.title': 'ABOUT <span class="gradient-text">US</span>',
  'about.historyTitle': 'OUR <span class="gradient-text">HISTORY</span>',
  'about.p1': 'Founded in 2025, Lens Click was born from an idea by a group of students who combined the problem of people wanting to capture moments but not knowing how to choose, with the solution of a website by Lens Click.',
  'about.p2': 'We believe every person, couple and family has a unique story to tell. Our mission is to capture those stories authentically and artistically, creating a visual legacy to be cherished for generations.',

  // Stats
  'stats.projects': 'Projects completed',
  'stats.months': 'Months of experience',
  'stats.couples': 'Happy couples',
  'stats.events': 'Events covered',

  // Services
  'services.portrait': 'Portrait Sessions',
  'services.from': 'From',
  'services.portrait.f1': '1h session',
  'services.portrait.f2': '20 edited photos',
  'services.portrait.f3': 'Pose guidance',
  'services.portrait.f4': 'Location of choice',
  'services.wedding': 'Wedding Photography',
  'services.wedding.f1': 'Coverage',
  'services.wedding.f2': 'Digital album',
  'services.wedding.f3': 'Candid photos',
  'services.wedding.f4': 'Post-wedding session',
  'services.events': 'Event Photography',
  'services.range': 'Between',
  'services.events.f1': 'Full coverage',
  'services.events.f2': 'High-resolution photos',
  'services.events.f3': 'Online gallery',
  'services.events.f4': 'Full support',
  'services.commercial': 'Commercial Photography',
  'services.commercial.f1': 'Product photos',
  'services.commercial.f2': 'Corporate packages',
  'services.commercial.f3': 'Commercial shoots',
  'services.commercial.f4': 'Commercial use',
  'services.request': 'Request quote',

  // Quotes
  'quotes.q1': '\"Each click tells a unique story\"',
  'quotes.q2': '\"The art of immortalizing moments\"',
  'quotes.q3': '\"Turning time into memories\"',
  'quotes.q4': '\"Where emotions become more than photos\"',

  // Portfolio filters
  'filter.all': 'All',
  'filter.retratos': 'Portraits',
  'filter.weddings': 'Weddings',
  'filter.events': 'Events',
  'filter.commercial': 'Commercial',

  // Reviews
  'reviews.title': 'REVIEWS',

  // Portfolio lead
  'portfolio.lead': 'Professional photography services that turn <b><span class="gradient-text">unique moments</span></b> into <b><span class="gradient-text">lasting memories</span></b>.',

  // Contact / Form
  'contact.lead': 'Each project is unique and special to us. We would love to hear your vision and how we can help turn it into reality through photography.',
  'contact.form.selectService': 'Select desired service',
  'contact.info.locationLabel': 'Location',
  'contact.info.location': 'São Paulo, SP',
  'contact.hoursTitle': 'HOURS OF <span class="gradient-text">OPERATION</span>',
  'contact.studiosTitle': 'OUR <span class="gradient-text">STUDIOS</span>',

  // Newsletter / footer
  'newsletter.lead': 'Receive photography tips, exclusive promotions and news about our services directly to your email.',
  'newsletter.tipTitle': 'Pro tips',
  'newsletter.tipLead': 'Exclusive photography content',
  'newsletter.firstTitle': 'Be the first to know',
  'newsletter.firstLead': 'News and launches',
  'newsletter.cta': 'Subscribe now and receive a free e-book with "10 Pro Tips for Amazing Photos".',
  'newsletter.privacyNote': 'Your data is protected and will not be shared.',

  // FAQ
  'faq.title': 'FREQUENT <span class="gradient-text">QUESTIONS</span>',
  'faq.q1': 'What is the delivery time?',
  'faq.a1': 'Between 7 and 20 business days, depending on the service and number of photos.',
  'faq.q2': 'How does payment work?',
  'faq.a2': 'We accept PIX, card and bank slip. Usually 30% at booking and the remainder on delivery.',
  'faq.q3': 'Can I choose which photos will be edited?',
  'faq.a3': 'Yes! We send a gallery for selection and, from it, proceed with final editing.',
  'faq.q4': 'Do you offer physical and virtual albums?',
  'faq.a4': 'We offer both. We have different formats and finishes for you to choose.',
  'faq.q5': 'How are the photos delivered?',
  'faq.a5': 'Via an online gallery with a protected link and download option. For premium packages, also on a USB drive.',
  'faq.q6': 'Do you have insurance for equipment?',
  'faq.a6': 'Yes, all our equipment is insured to ensure continuity of work.',
  'faq.q7': 'Do you do outdoor sessions?',
  'faq.a7': 'Yes. We can suggest locations or shoot at a place of your choice.',
  'faq.q8': 'How do I schedule a session?',
  'faq.a8': 'Contact us via the form with the desired date. We confirm availability and finalize details.',

  // Privacy / Terms
  'privacy.title': 'Privacy Policy',
  'privacy.back': 'Back to site',
  'terms.title': 'Terms of Use',
  'terms.back': 'Back to site'
      ,
      // Reviews
      'review.r1.name': 'Maurício and Maria — Wedding',
      'review.r1.text': 'Lens Click perfectly captured the magic of our wedding. Each photo tells a story and still moves us today. Exceptional professionalism and talent!',
      'review.r2.name': 'TechStart — Corporate Photography',
      'review.r2.text': 'We needed professional photos for our team and the result exceeded all expectations. We highly recommend them!',
      'review.r3.name': 'Marina Mendes — Individual Session',
      'review.r3.text': 'An amazing experience! I felt confident and the photos turned out wonderful.',
      'review.r4.name': 'Rafael and Sofia — Pre-wedding',
      'review.r4.text': 'The pre-wedding shoot was amazing! The team made us feel very comfortable and the photos were breathtaking.'
    }
  };

  function getInitialLang(){
    const saved = localStorage.getItem('lang');
    if(saved) return saved;
    const nav = (navigator.language || navigator.userLanguage || 'pt').toLowerCase();
    return nav.startsWith('en') ? 'en' : 'pt';
  }

  let lang = getInitialLang();

  function t(key){
    return (translations[lang] && translations[lang][key]) || '';
  }

  function applyTranslations(){
    // Animation: fade out -> update -> fade in

    // Troca 'a' por 'to' nos preços quando em inglês
    document.querySelectorAll('.price-sep').forEach(function(sep){
      sep.textContent = (lang === 'en') ? 'and' : 'a';
    });
    const elems = Array.from(document.querySelectorAll('[data-i18n], [data-i18n-placeholder], [data-i18n-section], title[data-i18n]'));

    // Apply fade-out styles
    elems.forEach(el=>{
      el.style.transition = 'opacity .28s ease, transform .28s ease';
      el.style.opacity = '0';
      el.style.transform = 'translateY(6px)';
    });

    // After fade-out, update content and fade-in
    setTimeout(()=>{
      // elements with data-i18n
      document.querySelectorAll('[data-i18n]').forEach(el=>{
        const key = el.getAttribute('data-i18n');
        if(!key) return;
        if(el.getAttribute('data-i18n-html') === 'true'){
          el.innerHTML = t(key) || el.innerHTML;
        } else {
          el.textContent = t(key) || el.textContent;
        }
      });

      // placeholders
      document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
        const key = el.getAttribute('data-i18n-placeholder');
        if(!key) return;
        el.placeholder = t(key) || el.placeholder;
      });

      // title attributes (e.g., small buttons/tooltips)
      document.querySelectorAll('[data-i18n-title]').forEach(el=>{
        const key = el.getAttribute('data-i18n-title');
        if(!key) return;
        el.title = t(key) || el.title;
      });

      // aria-label attributes for accessibility
      document.querySelectorAll('[data-i18n-aria]').forEach(el=>{
        const key = el.getAttribute('data-i18n-aria');
        if(!key) return;
        el.setAttribute('aria-label', t(key) || el.getAttribute('aria-label') || '');
      });

      // section indicators update data-section attribute
      document.querySelectorAll('[data-i18n-section]').forEach(el=>{
        const key = el.getAttribute('data-i18n-section');
        if(!key) return;
        el.setAttribute('data-section', t(key) || el.getAttribute('data-section'));
      });

      // Title element
      const titleEl = document.querySelector('title[data-i18n]');
      if(titleEl){
        const key = titleEl.getAttribute('data-i18n');
        document.title = t(key) || document.title;
      }

      // document language
      document.documentElement.lang = (lang==='pt') ? 'pt-BR' : 'en-US';

      // update lang toggle UI if present (use inline SVG flags + abbreviation)
      const btn = document.getElementById('langToggle');
      if(btn){ 
        const flagSVG = {
          pt: `
            <svg class="flag-svg" width="18" height="12" viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect width="18" height="12" fill="#009b3a"/>
              <polygon points="9,2 2,6 9,10 16,6" fill="#ffdf00"/>
              <circle cx="9" cy="6" r="2.4" fill="#002776"/>
            </svg>
          `,
          en: `
            <svg class="flag-svg" width="18" height="12" viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect width="18" height="12" fill="#b22234"/>
              <rect y="1.2" width="18" height="1.2" fill="#fff"/>
              <rect y="3.6" width="18" height="1.2" fill="#fff"/>
              <rect y="6.0" width="18" height="1.2" fill="#fff"/>
              <rect y="8.4" width="18" height="1.2" fill="#fff"/>
              <rect x="0" y="0" width="7" height="5" fill="#3c3b6e"/>
            </svg>
          `
        };

        const abbr = (lang === 'pt') ? 'PT' : 'EN';
        btn.innerHTML = `${flagSVG[lang]} <span class="abbr">${abbr}</span>`;
        btn.setAttribute('aria-label', lang === 'pt' ? 'Trocar idioma' : 'Toggle language');
      }

      // fade-in
      elems.forEach(el=>{
        el.style.opacity = '1';
        el.style.transform = 'none';
        // optional: remove inline transition after animation ends
        setTimeout(()=>{ el.style.transition = ''; }, 350);
      });

      // notify other scripts that translations were applied
      try { document.dispatchEvent(new Event('translations.updated')); } catch(e){ /* ignore */ }

    }, 220);
  }

  // toggle handler
  function toggleLang(){
    lang = (lang === 'pt') ? 'en' : 'pt';
    localStorage.setItem('lang', lang);
    applyTranslations();
  }

  // wire toggle button
  document.addEventListener('DOMContentLoaded', ()=>{
    const btn = document.getElementById('langToggle');
    if(btn){ btn.addEventListener('click', toggleLang); }
    applyTranslations();
  });

})();
