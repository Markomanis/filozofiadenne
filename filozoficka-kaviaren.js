// Surové importované dáta z ChronoFlo. Profily ručne neupravuj tu.
// Tento zoznam drží kompletnú časovú os a slúži iba ako záložný zdroj.
// Ručné profily FilozofiaDenne upravuj v objekte customProfiles nižšie.
const chronofloPhilosophers = [
    {
        chronofloId: 73155,
        title: "Thales of Miletus",
        startDate: "0624 BC-01-01 00:00:00",
        endDate: "0546 BC-01-01 00:00:00",
        sourceText: "Thales of Miletus was a Greek mathematician, astronomer and pre-Socratic philosopher from Miletus in Ionia, Asia Minor. He was one of the Seven Sages of Greece. Many, most notably Aristotle, regarded him as the first philosopher in the Greek tradition,..."
    },
    {
        chronofloId: 73157,
        title: "Pherecydes of Syros",
        startDate: "0620 BC-01-01 00:00:00",
        endDate: "0550 BC-01-01 00:00:00",
        sourceText: "Pherecydes of Syros was a Greek thinker from the island of Syros. Pherecydes authored a cosmogony, derived from three divine principles, Zas (Zeus), Cthonie (Earth) and Chronos (Time), known as the \"Pentemychos\". It formed a bridge between the..."
    },
    {
        chronofloId: 73158,
        title: "Anaximander of Miletus",
        startDate: "0610 BC-01-01 00:00:00",
        endDate: "0546 BC-01-01 00:00:00",
        sourceText: "Anaximander was a pre-Socratic Greek philosopher who lived in Miletus, a city of Ionia. He belonged to the Milesian school and learned the teachings of his master Thales. He succeeded Thales and became the second master of that school where he counted..."
    },
    {
        chronofloId: 73161,
        title: "Anaximenes of Miletus",
        startDate: "0585 BC-01-01 00:00:00",
        endDate: "0525 BC-01-01 00:00:00",
        sourceText: "Anaximenes of Miletus was an Ancient Greek, Ionian Pre-Socratic philosopher from Miletus in Asia Minor, active in the latter half of the 6th century BC. The details of his life are obscure because none of his work has been preserved. Anaximenes' ideas are..."
    },
    {
        chronofloId: 73159,
        title: "Pythagoras of Samos",
        startDate: "0580 BC-01-01 00:00:00",
        endDate: "0500 BC-01-01 00:00:00",
        sourceText: "Pythagoras of Samos was an ancient Ionian Greek philosopher and the eponymous founder of Pythagoreanism. His political and religious teachings were well known in Magna Graecia and influenced the philosophies of Plato, Aristotle, and, through them, Western..."
    },
    {
        chronofloId: 73162,
        title: "Xenophanes of Colophon",
        startDate: "0570 BC-01-01 00:00:00",
        endDate: "0480 BC-01-01 00:00:00",
        sourceText: "Xenophanes of Colophon was a Greek philosopher, theologian, poet, and critic of religious polytheism. Xenophanes is seen as one of the most important Pre-Socratic philosophers. Eusebius quoting Aristocles of Messene says that Xenophanes was the founder of..."
    },
    {
        chronofloId: 73156,
        title: "Heraclitus of Ephesus",
        startDate: "0535 BC-01-01 00:00:00",
        endDate: "0475 BC-01-01 00:00:00",
        sourceText: "Heraclitus of Ephesus was an Ancient Greek, pre-Socratic, Ionian philosopher and a native of the city of Ephesus, which was then part of the Persian Empire."
    },
    {
        chronofloId: 73160,
        title: "Epicharmus of Kos",
        startDate: "0530 BC-01-01 00:00:00",
        endDate: "0450 BC-01-01 00:00:00",
        sourceText: "Epicharmus of Kos or Epicharmus Comicus or Epicharmus Comicus Syracusanus, thought to have lived between c. 550 and c. 460 BC, was a Greek dramatist and philosopher who is often credited with being one of the first comic writers, having originated the..."
    },
    {
        chronofloId: 73163,
        title: "Parmenides of Elea",
        startDate: "0515 BC-01-01 00:00:00",
        endDate: "0450 BC-01-01 00:00:00",
        sourceText: "Parmenides of Elea was a pre-Socratic Greek philosopher from Elea in Magna Graecia. He is thought to have been in his prime around 475 BC."
    },
    {
        chronofloId: 73164,
        title: "Anaxagoras of Clazomenae",
        startDate: "0500 BC-01-01 00:00:00",
        endDate: "0428 BC-01-01 00:00:00",
        sourceText: "Anaxagoras was a Pre-Socratic Greek philosopher. Born in Clazomenae at a time when Asia Minor was under the control of the Persian Empire, Anaxagoras came to Athens. According to Diogenes Laërtius and Plutarch, in later life he was charged with impiety..."
    },
    {
        chronofloId: 73165,
        title: "Empedocles",
        startDate: "0492 BC-01-01 00:00:00",
        endDate: "0432 BC-01-01 00:00:00",
        sourceText: "Empedocles was a Greek pre-Socratic philosopher and a native citizen of Akragas, a Greek city in Sicily. Empedocles' philosophy is best known for originating the cosmogonic theory of the four classical elements. He also proposed forces he called Love and..."
    },
    {
        chronofloId: 73168,
        title: "Zeno of Elea",
        startDate: "0490 BC-01-01 00:00:00",
        endDate: "0430 BC-01-01 00:00:00",
        sourceText: "Zeno of Elea was a pre-Socratic Greek philosopher of Magna Graecia and a member of the Eleatic School founded by Parmenides. Aristotle called him the inventor of the dialectic. He is best known for his paradoxes, which Bertrand Russell described as..."
    },
    {
        chronofloId: 73166,
        title: "Gorgias",
        startDate: "0483 BC-01-01 00:00:00",
        endDate: "0375 BC-01-01 00:00:00",
        sourceText: "Gorgias was an ancient Greek sophist, pre-Socratic philosopher, and rhetorician who was a native of Leontinoi in Sicily. Along with Protagoras, he forms the first generation of Sophists. Several doxographers report that he was a pupil of Empedocles,..."
    },
    {
        chronofloId: 73167,
        title: "Protagoras of Abdera",
        startDate: "0481 BC-01-01 00:00:00",
        endDate: "0420 BC-01-01 00:00:00",
        sourceText: "Protagoras was a pre-Socratic Greek philosopher and rhetorical theorist. He is numbered as one of the sophists by Plato. In his dialogue Protagoras, Plato credits him with inventing the role of the professional sophist."
    },
    {
        chronofloId: 73169,
        title: "Antiphon",
        startDate: "0480 BC-01-01 00:00:00",
        endDate: "0411 BC-01-01 00:00:00",
        sourceText: "The name Antiphon the Sophist is used to refer to the writer of several Sophistic treatises. He probably lived in Athens in the last two decades of the 5th century BC, but almost nothing is known of his life."
    },
    {
        chronofloId: 73170,
        title: "Socrates of Athens",
        startDate: "0470 BC-01-01 00:00:00",
        endDate: "0399 BC-01-01 00:00:00",
        sourceText: "Socrates was a Greek philosopher from Athens who is credited as a founder of Western philosophy. An enigmatic figure, Socrates authored no texts and is known mainly through the posthumous accounts of classical writers, particularly his students Plato and..."
    },
    {
        chronofloId: 73171,
        title: "Prodicus of Ceos",
        startDate: "0465 BC-01-01 00:00:00",
        endDate: "0395 BC-01-01 00:00:00",
        sourceText: "Prodicus of Ceos was a Greek philosopher, and part of the first generation of Sophists. He came to Athens as ambassador from Ceos, and became known as a speaker and a teacher. Plato treats him with greater respect than the other sophists, and in several..."
    },
    {
        chronofloId: 73174,
        title: "Critias of Athens",
        startDate: "0460 BC-01-01 00:00:00",
        endDate: "0413 BC-01-01 00:00:00",
        sourceText: "Critias was an ancient Athenian political figure and author. Born in Athens, Critias was the son of Callaeschrus and a first cousin of Plato's mother Perictione. He became a leading and violent member of the Thirty Tyrants. He also was an associate of..."
    },
    {
        chronofloId: 73172,
        title: "Hippias",
        startDate: "0460 BC-01-01 00:00:00",
        endDate: "0460 BC-01-01 00:00:00",
        sourceText: "Hippias of Elis was a Greek sophist, and a contemporary of Socrates. With an assurance characteristic of the later sophists, he claimed to be regarded as an authority on all subjects, and lectured on poetry, grammar, history, politics, mathematics, and..."
    },
    {
        chronofloId: 73173,
        title: "Thrasymachus of Miletus",
        startDate: "0459 BC-01-01 00:00:00",
        endDate: "0400 BC-01-01 00:00:00",
        sourceText: "Thrasymachus was a sophist of ancient Greece best known as a character in Plato's Republic."
    },
    {
        chronofloId: 73176,
        title: "Leucippus of Miletus",
        startDate: "0455 BC-01-01 00:00:00",
        endDate: "0455 BC-01-01 00:00:00",
        sourceText: "Leucippus is reported in some ancient sources to have been a philosopher who was the earliest Greek to develop the theory of atomism—the idea that everything is composed entirely of various imperishable, indivisible elements called atoms. Leucippus often..."
    },
    {
        chronofloId: 73179,
        title: "Democritus of Abdera",
        startDate: "0450 BC-01-01 00:00:00",
        endDate: "0370 BC-01-01 00:00:00",
        sourceText: "Democritus was an Ancient Greek pre-Socratic philosopher primarily remembered today for his formulation of an atomic theory of the universe."
    },
    {
        chronofloId: 73175,
        title: "Diagoras of Melos",
        startDate: "0450 BC-01-01 00:00:00",
        endDate: "0415 BC-01-01 00:00:00",
        sourceText: "Diagoras \"the Atheist\" of Melos was a Greek poet and sophist of the 5th century BC. Throughout antiquity, he was regarded as an atheist, but very little is known for certain about what he actually believed. Anecdotes about his life indicate that he spoke..."
    },
    {
        chronofloId: 73177,
        title: "Antisthenes",
        startDate: "0444 BC-01-01 00:00:00",
        endDate: "0365 BC-01-01 00:00:00",
        sourceText: "Antisthenes was a Greek philosopher and a pupil of Socrates. Antisthenes first learned rhetoric under Gorgias before becoming an ardent disciple of Socrates. He adopted and developed the ethical side of Socrates' teachings, advocating an ascetic life..."
    },
    {
        chronofloId: 73178,
        title: "Aristippus of Cyrene",
        startDate: "0440 BC-01-01 00:00:00",
        endDate: "0366 BC-01-01 00:00:00",
        sourceText: "Aristippus of Cyrene was a hedonistic Greek philosopher and the founder of the Cyrenaic school of philosophy. He was a pupil of Socrates, but adopted a very different philosophical outlook, teaching that the goal of life was to seek pleasure by adapting..."
    },
    {
        chronofloId: 73180,
        title: "Plato",
        startDate: "0427 BC-01-01 00:00:00",
        endDate: "0347 BC-01-01 00:00:00",
        sourceText: "Plato was a Greek philosopher born in Athens during the Classical period in Ancient Greece, founder of the Platonist school of thought and the Academy, the first institution of higher learning in the Western world."
    },
    {
        chronofloId: 73181,
        title: "Xenophon",
        startDate: "0427 BC-01-01 00:00:00",
        endDate: "0355 BC-01-01 00:00:00",
        sourceText: "Xenophon of Athens was a Greek military leader, philosopher, and historian, born in Athens. At the age of 30, Xenophon was elected commander of one of the biggest Greek mercenary armies of the Achaemenid Empire, the Ten Thousand, that marched on and came..."
    },
    {
        chronofloId: 73183,
        title: "Eudoxus of Cnidus",
        startDate: "0408 BC-01-01 00:00:00",
        endDate: "0355 BC-01-01 00:00:00",
        sourceText: "Eudoxus of Cnidus was an ancient Greek astronomer, mathematician, scholar, and student of Archytas and Plato. All of his works are lost, though some fragments are preserved in Hipparchus' commentary on Aratus's poem on astronomy. Sphaerics by Theodosius..."
    },
    {
        chronofloId: 73184,
        title: "Speusippus",
        startDate: "0408 BC-01-01 00:00:00",
        endDate: "0339 BC-01-01 00:00:00",
        sourceText: "Speusippus was an ancient Greek philosopher. Speusippus was Plato's nephew by his sister Potone. After Plato's death, c. 348 BC, Speusippus inherited the Academy, near age 60, and remained its head for the next eight years. However, following a stroke, he..."
    },
    {
        chronofloId: 73182,
        title: "Diogenes of Sinope",
        startDate: "0404 BC-01-01 00:00:00",
        endDate: "0323 BC-01-01 00:00:00",
        sourceText: "Diogenes, also known as Diogenes the Cynic, was a Greek philosopher and one of the founders of Cynic philosophy. He was born in Sinope, an Ionian colony on the Black Sea coast of Anatolia in 412 or 404 BC and died at Corinth in 323 BC."
    },
    {
        chronofloId: 73186,
        title: "Xenocrates",
        startDate: "0396 BC-01-01 00:00:00",
        endDate: "0314 BC-01-01 00:00:00",
        sourceText: "Xenocrates of Chalcedon was a Greek philosopher, mathematician, and leader (scholarch) of the Platonic Academy from 339/8 to 314/3 BC. His teachings followed those of Plato, which he attempted to define more closely, often with mathematical elements. He..."
    },
    {
        chronofloId: 73185,
        title: "Aristotle",
        startDate: "0384 BC-01-01 00:00:00",
        endDate: "0322 BC-01-01 00:00:00",
        sourceText: "Aristotle was a Greek philosopher and polymath during the Classical period in Ancient Greece. Taught by Plato, he was the founder of the Lyceum, the Peripatetic school of philosophy, and the Aristotelian tradition. His writings cover many subjects..."
    },
    {
        chronofloId: 73188,
        title: "Theophrastus",
        startDate: "0371 BC-01-01 00:00:00",
        endDate: "0287 BC-01-01 00:00:00",
        sourceText: "Theophrastus, a Greek native of Eresos in Lesbos, was the successor to Aristotle in the Peripatetic school. His given name was Tyrtamus (Τύρταμος); his nickname Θεόφραστος was given by Aristotle, his teacher, for his 'divine style of expression'."
    },
    {
        chronofloId: 73190,
        title: "Pyrrho of Elis",
        startDate: "0360 BC-01-01 00:00:00",
        endDate: "0270 BC-01-01 00:00:00",
        sourceText: "Pyrrho of Elis, born in Elis, Greece, was a Greek philosopher of Classical antiquity, credited as being the first Greek skeptic philosopher and founder of Pyrrhonism."
    },
    {
        chronofloId: 73187,
        title: "Epicurus",
        startDate: "0341 BC-01-01 00:00:00",
        endDate: "0270 BC-01-01 00:00:00",
        sourceText: "Epicurus was an ancient Greek philosopher and sage who founded Epicureanism, a highly influential school of philosophy. He was born on the Greek island of Samos to Athenian parents. Influenced by Democritus, Aristippus, Pyrrho, and possibly the Cynics, he..."
    },
    {
        chronofloId: 73189,
        title: "Strato of Lampsacus",
        startDate: "0340 BC-01-01 00:00:00",
        endDate: "0268 BC-01-01 00:00:00",
        sourceText: "Strato of Lampsacus was a Peripatetic philosopher, and the third director (scholarch) of the Lyceum after the death of Theophrastus. He devoted himself especially to the study of natural science, and increased the naturalistic elements in Aristotle's..."
    },
    {
        chronofloId: 73191,
        title: "Theodorus the Atheist",
        startDate: "0340 BC-01-01 00:00:00",
        endDate: "0250 BC-01-01 00:00:00",
        sourceText: "Theodorus the Atheist, of Cyrene, was a Greek philosopher of the Cyrenaic school. He lived in both Greece and Alexandria, before ending his days in his native city of Cyrene. As a Cyrenaic philosopher, he taught that the goal of life was to obtain joy and..."
    },
    {
        chronofloId: 73193,
        title: "Zeno of Citium",
        startDate: "0333 BC-01-01 00:00:00",
        endDate: "0264 BC-01-01 00:00:00",
        sourceText: "Zeno of Citium was a Hellenistic philosopher from Citium, Cyprus. Zeno was the founder of the Stoic school of philosophy, which he taught in Athens from about 300 BC. Based on the moral ideas of the Cynics, Stoicism laid great emphasis on goodness and..."
    },
    {
        chronofloId: 73192,
        title: "Timon",
        startDate: "0320 BC-01-01 00:00:00",
        endDate: "0230 BC-01-01 00:00:00",
        sourceText: "Timon of Phlius was a Greek Pyrrhonist philosopher, a pupil of Pyrrho, and a celebrated writer of satirical poems called Silloi (Σίλλοι). He was born in Phlius, moved to Megara, and then he returned home and married. He next went to Elis with his wife,..."
    },
    {
        chronofloId: 73194,
        title: "Aristarchus of Samos",
        startDate: "0310 BC-01-01 00:00:00",
        endDate: "0230 BC-01-01 00:00:00",
        sourceText: "Aristarchus of Samos was an ancient Greek astronomer and mathematician who presented the first known heliocentric model that placed the Sun at the center of the known universe, with the Earth revolving around the Sun once a year and rotating about its..."
    },
    {
        chronofloId: 73197,
        title: "Archimedes",
        startDate: "0287 BC-01-01 00:00:00",
        endDate: "0212 BC-01-01 00:00:00",
        sourceText: "Archimedes of Syracuse was a Greek mathematician, physicist, engineer, astronomer, and inventor from the ancient city of Syracuse in Sicily. Although few details of his life are known, he is regarded as one of the leading scientists in classical..."
    },
    {
        chronofloId: 73196,
        title: "Chrysippus of Soli",
        startDate: "0280 BC-01-01 00:00:00",
        endDate: "0207 BC-01-01 00:00:00",
        sourceText: "Chrysippus of Soli was a Greek Stoic philosopher. He was a native of Soli, Cilicia, but moved to Athens as a young man, where he became a pupil of Cleanthes in the Stoic school. When Cleanthes died, around 230 BC, Chrysippus became the third head of the..."
    },
    {
        chronofloId: 73200,
        title: "Eratosthenes",
        startDate: "0276 BC-01-01 00:00:00",
        endDate: "0276 BC-01-01 00:00:00",
        sourceText: "Eratosthenes of Cyrene was a Greek polymath: a mathematician, geographer, poet, astronomer, and music theorist. He was a man of learning, becoming the chief librarian at the Library of Alexandria. His work is comparable to what is now known as the study..."
    },
    {
        chronofloId: 73198,
        title: "Carneades",
        startDate: "0214 BC-01-01 00:00:00",
        endDate: "0129 BC-01-01 00:00:00",
        sourceText: "Carneades was a Greek philosopher and perhaps the most prominent head of the Skeptical Academy in ancient Greece. He was born in Cyrene. By the year 159 BC, he had started to refute all previous dogmatic doctrines, especially Stoicism and even the..."
    },
    {
        chronofloId: 73199,
        title: "Hipparchus of Nicaea",
        startDate: "0190 BC-01-01 00:00:00",
        endDate: "0120 BC-01-01 00:00:00",
        sourceText: "Hipparchus of Nicaea was a Greek astronomer, geographer, and mathematician. He is considered the founder of trigonometry, but is most famous for his incidental discovery of precession of the equinoxes. Hipparchus was born in Nicaea, Bithynia, and probably..."
    },
    {
        chronofloId: 73195,
        title: "Cicero",
        startDate: "0106 BC-01-01 00:00:00",
        endDate: "0043 BC-01-01 00:00:00",
        sourceText: "Marcus Tullius Cicero was a Roman statesman, lawyer, scholar, philosopher and Academic Skeptic, who tried to uphold optimate principles during the political crises that led to the establishment of the Roman Empire. His extensive writings include treatises..."
    },
    {
        chronofloId: 73201,
        title: "Lucretius",
        startDate: "0099 BC-01-01 00:00:00",
        endDate: "0055 BC-01-01 00:00:00",
        sourceText: "Titus Lucretius Carus was a Roman poet and philosopher. His only known work is the philosophical poem De rerum natura, a didactic work about the tenets and philosophy of Epicureanism, and which usually is translated into English as On the Nature of..."
    },
    {
        chronofloId: 73202,
        title: "Philo",
        startDate: "0020 BC-01-01 00:00:00",
        endDate: "0050-01-01 00:00:00",
        sourceText: "Philo of Alexandria, also called Philo Judaeus, was a Hellenistic Jewish philosopher who lived in Alexandria, in the Roman province of Egypt."
    },
    {
        chronofloId: 73204,
        title: "Seneca the Younger",
        startDate: "0004 BC-01-01 00:00:00",
        endDate: "0065-01-01 00:00:00",
        sourceText: "Lucius Annaeus Seneca the Younger, usually known as Seneca, was a Roman Stoic philosopher, statesman, dramatist, and, in one work, satirist, from the post-Augustan age of Latin literature."
    },
    {
        chronofloId: 73203,
        title: "Hero of Alexandria",
        startDate: "0010-01-01 00:00:00",
        endDate: "0070-01-01 00:00:00",
        sourceText: "Hero of Alexandria, was a Greek mathematician and engineer who was active in his native city of Alexandria, Roman Egypt. He is often considered the greatest experimenter of antiquity and his work is representative of the Hellenistic scientific tradition."
    },
    {
        chronofloId: 73205,
        title: "Quintilian",
        startDate: "0035-01-01 00:00:00",
        endDate: "0100-01-01 00:00:00",
        sourceText: "Marcus Fabius Quintilianus was a Roman educator and rhetorician from Hispania, widely referred to in medieval schools of rhetoric and in Renaissance writing. In English translation, he is usually referred to as Quintilian, although the alternate spellings..."
    },
    {
        chronofloId: 73206,
        title: "Epictetus",
        startDate: "0055-01-01 00:00:00",
        endDate: "0135-01-01 00:00:00",
        sourceText: "Epictetus was a Greek Stoic philosopher. He was born into slavery at Hierapolis, Phrygia and lived in Rome until his banishment, when he went to Nicopolis in northwestern Greece for the rest of his life. His teachings were written down and published by..."
    },
    {
        chronofloId: 73208,
        title: "Marcus Aurelius",
        startDate: "0121-01-01 00:00:00",
        endDate: "0180-01-01 00:00:00",
        sourceText: "Marcus Aurelius Antoninus was Roman emperor from 161 to 180 and a Stoic philosopher. He was the last of the rulers known as the Five Good Emperors, and the last emperor of the Pax Romana, an age of relative peace and stability for the Roman Empire. He..."
    },
    {
        chronofloId: 73207,
        title: "Sextus Empiricus",
        startDate: "0160-01-01 00:00:00",
        endDate: "0210-01-01 00:00:00",
        sourceText: "Sextus Empiricus was a Greek Pyrrhonist philosopher and a physician. His philosophical works are the most complete surviving account of ancient Greek and Roman Pyrrhonism, and because of the arguments they contain against the other Hellenistic..."
    },
    {
        chronofloId: 73210,
        title: "Plotinus",
        startDate: "0205-01-01 00:00:00",
        endDate: "0270-01-01 00:00:00",
        sourceText: "Plotinus was a philosopher in the Hellenistic tradition, born and raised in Roman Egypt. Plotinus is regarded by modern scholarship as the founder of Neoplatonism. His teacher was the self-taught philosopher Ammonius Saccas, who belonged to the Platonic..."
    },
    {
        chronofloId: 73209,
        title: "Porphyry",
        startDate: "0232-01-01 00:00:00",
        endDate: "0304-01-01 00:00:00",
        sourceText: "Porphyry of Tyre was a Tyrian Neoplatonic philosopher born in Tyre, Roman Syria during Roman rule. He edited and published The Enneads, the only collection of the work of Plotinus, his teacher. His commentary on Euclid's Elements was used as a source by..."
    },
    {
        chronofloId: 73211,
        title: "Iamblichus of Syria",
        startDate: "0245-01-01 00:00:00",
        endDate: "0325-01-01 00:00:00",
        sourceText: "Iamblichus was a Syrian Neoplatonist philosopher of Arab origin. He determined the direction that would later be taken by Neoplatonic philosophy. He was also the biographer of the Greek mystic, philosopher and mathematician Pythagoras."
    },
    {
        chronofloId: 73213,
        title: "Augustine of Hippo",
        startDate: "0354-01-01 00:00:00",
        endDate: "0430-01-01 00:00:00",
        sourceText: "Augustine of Hippo, also known as Saint Augustine, was a theologian and philosopher of Berber origin and the bishop of Hippo Regius in Numidia, Roman North Africa. His writings influenced the development of Western philosophy and Western Christianity, and..."
    },
    {
        chronofloId: 73212,
        title: "Proclus",
        startDate: "0412-01-01 00:00:00",
        endDate: "0485-01-01 00:00:00",
        sourceText: "Proclus is one of the most influential philosophical commentators of antiquity and is regarded by some scholars as the greatest Neoplatonic philosopher of the 5th century AD."
    },
    {
        chronofloId: 73214,
        title: "Diogenes of Apollonia",
        startDate: "0425-01-01 00:00:00",
        endDate: "0425-01-01 00:00:00",
        sourceText: "Diogenes of Apollonia was an ancient Greek philosopher, and was a native of the Milesian colony Apollonia in Thrace. He lived for some time in Athens. His doctrines are known chiefly from Diogenes Laërtius and Simplicius. He believed air to be the one..."
    },
    {
        chronofloId: 73215,
        title: "Hippo",
        startDate: "0425-01-01 00:00:00",
        endDate: "0425-01-01 00:00:00",
        sourceText: "Hippo was a Pre-Socratic Greek philosopher. He is variously described as coming from Rhegium, Metapontum, Samos, and Croton, and it is possible that there was more than one philosopher with this name."
    },
    {
        chronofloId: 73216,
        title: "Boethius",
        startDate: "0480-01-01 00:00:00",
        endDate: "0524-01-01 00:00:00",
        sourceText: "Anicius Manlius Severinus Boethius, commonly called Boethius, was a Roman senator, consul, magister officiorum, and philosopher of the early 6th century. He was born about a year after Odoacer deposed the last Western Roman Emperor and declared himself..."
    },
    {
        chronofloId: 73217,
        title: "John Philoponus",
        startDate: "0490-01-01 00:00:00",
        endDate: "0570-01-01 00:00:00",
        sourceText: "John Philoponus, also known as John the Grammarian or John of Alexandria, was a Byzantine Greek philologist, Aristotelian commentator, Christian theologian and an author of a considerable number of philosophical treatises and theological works. He was..."
    },
    {
        chronofloId: 73218,
        title: "John of Damascus",
        startDate: "0680-01-01 00:00:00",
        endDate: "0750-01-01 00:00:00",
        sourceText: "John of Damascus or John Damascene was a Christian monk, priest, hymnographer, and apologist. Born and raised in Damascus c. 675 or 676; the precise date and place of his death is not known, though tradition places it at his monastery, Mar Saba, near..."
    },
    {
        chronofloId: 73219,
        title: "Al-Kindi",
        startDate: "0801-01-01 00:00:00",
        endDate: "0873-01-01 00:00:00",
        sourceText: "Abu Yūsuf Yaʻqūb ibn ʼIsḥāq aṣ-Ṣabbāḥ al-Kindī was an Arab Muslim philosopher, polymath, mathematician, physician and music theorist. Al-Kindi was the first of the Islamic peripatetic philosophers, and is hailed as the \"father of Arab philosophy\"."
    },
    {
        chronofloId: 73220,
        title: "Abbas ibn Firnas",
        startDate: "0809-01-01 00:00:00",
        endDate: "0887-01-01 00:00:00",
        sourceText: "Abu al-Qasim Abbas ibn Firnas ibn Wirdas al-Takurini, also known as Abbas ibn Firnas, Latinized Armen Firman, was an Andalusi polymath: an inventor, astronomer, physician, chemist, engineer, Andalusi musician, and Arabic-language poet. He was reported to..."
    },
    {
        chronofloId: 73221,
        title: "John the Scot",
        startDate: "0815-01-01 00:00:00",
        endDate: "0877-01-01 00:00:00",
        sourceText: "John Scotus Eriugena or Johannes Scotus Erigena or John the Scot was an Irish Catholic Neoplatonist philosopher, theologian and poet of the Early Middle Ages. Bertrand Russell dubbed him \"the most astonishing person of the ninth century\". The Stanford..."
    },
    {
        chronofloId: 73222,
        title: "al-Razi",
        startDate: "0865-01-01 00:00:00",
        endDate: "0925-01-01 00:00:00",
        sourceText: "Abū Bakr Muḥammad ibn Zakariyyāʾ al-Rāzī, 864 or 865 – 925 or 935 CE, was a Persian physician, philosopher and alchemist, widely considered one of the most important figures in the history of medicine. He also wrote on logic, astronomy and grammar."
    },
    {
        chronofloId: 73224,
        title: "al–Faràbi",
        startDate: "0870-01-01 00:00:00",
        endDate: "0950-01-01 00:00:00",
        sourceText: "Abu Nasr Al-Farabi known in the West as Alpharabius; was a renowned early Islamic philosopher and jurist who wrote in the fields of political philosophy, metaphysics, ethics and logic. He was also a scientist, cosmologist, mathematician and music..."
    },
    {
        chronofloId: 73223,
        title: "Saadia Gaon",
        startDate: "0882-01-01 00:00:00",
        endDate: "0942-01-01 00:00:00",
        sourceText: "Sa'adiah ben Yosef Gaon was a prominent rabbi, gaon, Jewish philosopher, and exegete who was active in the Abbasid Caliphate."
    },
    {
        chronofloId: 73226,
        title: "Al-Biruni",
        startDate: "0973-01-01 00:00:00",
        endDate: "0973-01-01 00:00:00",
        sourceText: "Abu Rayhan Muhammad ibn Ahmad al-Biruni commonly known as al-Biruni, was a Khwarazmian Iranian scholar and polymath during the Islamic Golden Age. He has been called variously the \"founder of Indology\", \"Father of Comparative Religion\", \"Father of modern..."
    },
    {
        chronofloId: 73225,
        title: "Avicenna",
        startDate: "0980-01-01 00:00:00",
        endDate: "1037-01-01 00:00:00",
        sourceText: "Ibn Sina, also known as Abu Ali Sina, Pour Sina, and often known in the West as Avicenna, was a Persian polymath who is regarded as one of the most significant physicians, astronomers, thinkers and writers of the Islamic Golden Age, and the father of..."
    },
    {
        chronofloId: 73227,
        title: "Ibn Gabirol",
        startDate: "1021-01-01 00:00:00",
        endDate: "1058-01-01 00:00:00",
        sourceText: "Solomon ibn Gabirol or Solomon ben Judah was an 11th-century Andalusian poet and Jewish philosopher in the Neo-Platonic tradition. He published over a hundred poems, as well as works of biblical exegesis, philosophy, ethics and satire. One source credits..."
    },
    {
        chronofloId: 73229,
        title: "Anselm",
        startDate: "1034-01-01 00:00:00",
        endDate: "1109-01-01 00:00:00",
        sourceText: "Anselm of Canterbury, also called Anselm of Aosta after his birthplace and Anselm of Bec after his monastery, was an Italian Benedictine monk, abbot, philosopher and theologian of the Catholic Church, who held the office of Archbishop of Canterbury from..."
    },
    {
        chronofloId: 73228,
        title: "Omar Khayyam",
        startDate: "1048-01-01 00:00:00",
        endDate: "1131-01-01 00:00:00",
        sourceText: "Omar Khayyam was a Persian polymath, mathematician, astronomer, historian, philosopher, and poet. He was born in Nishapur, the initial capital of the Seljuk Empire. As a scholar, he was contemporary with the rule of the Seljuk dynasty around the time of..."
    },
    {
        chronofloId: 73230,
        title: "Al-Ghazali",
        startDate: "1058-01-01 00:00:00",
        endDate: "1111-01-01 00:00:00",
        sourceText: "Al-Ghazali, known in Persian-speaking countries as Imam Muhammad-i Ghazali, was a Persian polymath, who was one of the most prominent and influential philosophers, theologians, jurists, logicians and mystics of Islam."
    },
    {
        chronofloId: 73231,
        title: "Peter Abelard",
        startDate: "1079-01-01 00:00:00",
        endDate: "1142-01-01 00:00:00",
        sourceText: "Peter Abelard was a medieval French scholastic philosopher, leading logician, theologian, poet, composer and musician."
    },
    {
        chronofloId: 73232,
        title: "Peter Lombard",
        startDate: "1100-01-01 00:00:00",
        endDate: "1160-01-01 00:00:00",
        sourceText: "Peter Lombard, was a scholastic theologian, Bishop of Paris, and author of Four Books of Sentences which became the standard textbook of theology, for which he earned the accolade Magister Sententiarum."
    },
    {
        chronofloId: 73233,
        title: "Abraham ibn Daud",
        startDate: "1110-01-01 00:00:00",
        endDate: "1180-01-01 00:00:00",
        sourceText: "Abraham ibn Daud was a Spanish-Jewish astronomer, historian, and philosopher; born at Córdoba, Spain about 1110; died in Toledo, Spain, according to common report, a martyr about 1180. He is sometimes known by the abbreviation Rabad I or Ravad I. His..."
    },
    {
        chronofloId: 73234,
        title: "Averroes",
        startDate: "1126-01-01 00:00:00",
        endDate: "1126-01-01 00:00:00",
        sourceText: "Ibn Rushd, often Latinized as Averroes, was a Muslim Andalusian polymath and jurist who wrote about many subjects, including philosophy, theology, medicine, astronomy, physics, psychology, mathematics, Islamic jurisprudence and law, and linguistics. The..."
    },
    {
        chronofloId: 73235,
        title: "Maimonides",
        startDate: "1135-01-01 00:00:00",
        endDate: "1204-01-01 00:00:00",
        sourceText: "Moses ben Maimon (1138–1204), commonly known as Maimonides and also referred to by the acronym Rambam, was a medieval Sephardic Jewish philosopher who became one of the most prolific and influential Torah scholars of the Middle Ages. In his time, he was..."
    },
    {
        chronofloId: 73236,
        title: "Sohrevardi",
        startDate: "1154-01-01 00:00:00",
        endDate: "1191-01-01 00:00:00",
        sourceText: "\"Shahāb ad-Dīn\" Yahya ibn Habash Suhrawardī was a Persian philosopher and founder of the Iranian school of Illuminationism, an important school in Islamic philosophy. The \"light\" in his \"Philosophy of Illumination\" is the source of knowledge. He is..."
    },
    {
        chronofloId: 73237,
        title: "Fibonacci",
        startDate: "1170-01-01 00:00:00",
        endDate: "1250-01-01 00:00:00",
        sourceText: "Fibonacci, also known as Leonardo Bonacci, Leonardo of Pisa, or Leonardo Bigollo Pisano, was an Italian mathematician from the Republic of Pisa, considered to be \"the most talented Western mathematician of the Middle Ages\"."
    },
    {
        chronofloId: 73239,
        title: "Michael Scot",
        startDate: "1175-01-01 00:00:00",
        endDate: "1232-01-01 00:00:00",
        sourceText: "Michael Scot was a mathematician and scholar in the Middle Ages. He translated Averroes and was the greatest public intellectual of his day."
    },
    {
        chronofloId: 73238,
        title: "Robert Grosseteste",
        startDate: "1175-01-01 00:00:00",
        endDate: "1253-01-01 00:00:00",
        sourceText: "Robert Grosseteste, also known as Robert Greathead or Robert of Lincoln, was an English statesman, scholastic philosopher, theologian, scientist and Bishop of Lincoln. He was born of humble parents in Suffolk, but the associations with the village of..."
    },
    {
        chronofloId: 73240,
        title: "St Francis of Assisi",
        startDate: "1182-01-01 00:00:00",
        endDate: "1226-01-01 00:00:00",
        sourceText: "Francis of Assisi (born Giovanni di Pietro di Bernardone) was an Italian Catholic friar, deacon, and mystic. He founded the men's Order of Friars Minor, the women's Order of St. Clare, the Third Order of St. Francis and the Custody of the Holy Land...."
    },
    {
        chronofloId: 73241,
        title: "Albertus Magnus",
        startDate: "1193-01-01 00:00:00",
        endDate: "1280-01-01 00:00:00",
        sourceText: "Albertus Magnus, also known as Saint Albert the Great or Albert of Cologne, was a German Dominican friar, philosopher, scientist, and bishop. Later canonised as a Catholic saint, he was known during his lifetime as Doctor universalis and Doctor expertus..."
    },
    {
        chronofloId: 73243,
        title: "Roger Bacon",
        startDate: "1214-01-01 00:00:00",
        endDate: "1294-01-01 00:00:00",
        sourceText: "Roger Bacon, also known by the scholastic accolade Doctor Mirabilis, was a medieval English philosopher and Franciscan friar who placed considerable emphasis on the study of nature through empiricism. In the early modern era, he was regarded as a wizard..."
    },
    {
        chronofloId: 73244,
        title: "Ibn Sab'in",
        startDate: "1217-01-01 00:00:00",
        endDate: "1271-01-01 00:00:00",
        sourceText: "Ibn Sab'īn was an Arab Sufi philosopher, the last philosopher of the Andalus in the west land of Islamic world. He was born in 1217 in Spain and lived in Ceuta. He was known for his replies to questions sent to him by Frederick II, ruler of Sicily. He..."
    },
    {
        chronofloId: 73242,
        title: "Thomas Aquinas",
        startDate: "1221-01-01 00:00:00",
        endDate: "1274-01-01 00:00:00",
        sourceText: "Thomas Aquinas was an Italian Dominican friar, philosopher, Catholic priest, and Doctor of the Church. An immensely influential philosopher, theologian, and jurist in the tradition of scholasticism, he is also known within the latter as the Doctor..."
    },
    {
        chronofloId: 73246,
        title: "Bonaventure",
        startDate: "1225-01-01 00:00:00",
        endDate: "1274-01-01 00:00:00",
        sourceText: "Bonaventure, born Giovanni di Fidanza, was an Italian medieval Franciscan, scholastic theologian and philosopher. The seventh Minister General of the Order of Friars Minor, he was also Cardinal Bishop of Albano. He was canonised on 14 April 1482 by Pope..."
    },
    {
        chronofloId: 73248,
        title: "Ramon Llull",
        startDate: "1232-01-01 00:00:00",
        endDate: "1315-01-01 00:00:00",
        sourceText: "Ramon Llull was a philosopher, theologian, poet, missionary, and Christian apologist from the Kingdom of Majorca."
    },
    {
        chronofloId: 73245,
        title: "Siger",
        startDate: "1240-01-01 00:00:00",
        endDate: "1280-01-01 00:00:00",
        sourceText: "Siger of Brabant was a 13th-century philosopher from the southern Low Countries who was an important proponent of Averroism."
    },
    {
        chronofloId: 73249,
        title: "Meister Eckhart",
        startDate: "1260-01-01 00:00:00",
        endDate: "1328-01-01 00:00:00",
        sourceText: "Eckhart von Hochheim, commonly known as Meister Eckhart or Eckehart, was a German Catholic theologian, philosopher and mystic, born near Gotha in the Landgraviate of Thuringia in the Holy Roman Empire."
    },
    {
        chronofloId: 73250,
        title: "Duns Scotus",
        startDate: "1266-01-01 00:00:00",
        endDate: "1308-01-01 00:00:00",
        sourceText: "John Duns, commonly called Duns Scotus, was a Scottish Catholic priest and Franciscan friar, university professor, philosopher, and theologian. He is one of the four most important philosopher-theologians of Western Europe in the High Middle Ages,..."
    },
    {
        chronofloId: 73247,
        title: "Marsilius of Padua",
        startDate: "1270-01-01 00:00:00",
        endDate: "1342-01-01 00:00:00",
        sourceText: "Marsilius of Padua was an Italian scholar, trained in medicine, who practiced a variety of professions. He was also an important 14th-century political figure. His political treatise Defensor pacis, an attempt to refute papalist claims to a \"plenitude of..."
    },
    {
        chronofloId: 73252,
        title: "Gersonides",
        startDate: "1288-01-01 00:00:00",
        endDate: "1344-01-01 00:00:00",
        sourceText: "Levi ben Gershon, better known by his Graecized name as Gersonides, or by his Latinized name Magister Leo Hebraeus, or in Hebrew by the abbreviation of first letters as RaLBaG, was a medieval French Jewish philosopher, Talmudist, mathematician, physician..."
    },
    {
        chronofloId: 73251,
        title: "William of Ockham",
        startDate: "1288-01-01 00:00:00",
        endDate: "1348-01-01 00:00:00",
        sourceText: "William of Ockham was an English Franciscan friar, scholastic philosopher, and theologian, who is believed to have been born in Ockham, a small village in Surrey. He is considered to be one of the major figures of medieval thought and was at the centre of..."
    },
    {
        chronofloId: 73253,
        title: "Jean Buridan",
        startDate: "1300-01-01 00:00:00",
        endDate: "1358-01-01 00:00:00",
        sourceText: "Jean Buridan was an influential 14th century French philosopher. He was a teacher in the faculty of arts at the University of Paris for his entire career, focusing in particular on logic and the works of Aristotle."
    },
    {
        chronofloId: 73254,
        title: "John Wycliffe",
        startDate: "1320-01-01 00:00:00",
        endDate: "1384-01-01 00:00:00",
        sourceText: "John Wycliffe was an English scholastic philosopher, theologian, biblical translator, reformer, Catholic priest, and a seminary professor at the University of Oxford. He became an influential dissident within the Roman Catholic priesthood during the 14th..."
    },
    {
        chronofloId: 73255,
        title: "Nicole Oresme",
        startDate: "1320-01-01 00:00:00",
        endDate: "1320-01-01 00:00:00",
        sourceText: "Nicole Oresme, also known as Nicolas Oresme, Nicholas Oresme, or Nicolas d'Oresme, was a French philosopher of the later Middle Ages. He wrote influential works on economics, mathematics, physics, astrology and astronomy, philosophy, and theology; was..."
    },
    {
        chronofloId: 73258,
        title: "Ibn Khaldun",
        startDate: "1332-01-01 00:00:00",
        endDate: "1406-01-01 00:00:00",
        sourceText: "Ibn Khaldun was an Arab sociologist, philosopher and historian who has been described as the precursive founder of the proto-disciplines that would become historiography, sociology, economics, and demography. Niccolò Machiavelli of the Renaissance, Georg..."
    },
    {
        chronofloId: 73257,
        title: "Hasdai Crescas",
        startDate: "1340-01-01 00:00:00",
        endDate: "1411-01-01 00:00:00",
        sourceText: "Hasdai ben Abraham Crescas was a Spanish-Jewish philosopher and a renowned halakhist. Along with Maimonides (\"Rambam\"), Gersonides (\"Ralbag\"), and Joseph Albo, he is known as one of the major practitioners of the rationalist approach to Jewish philosophy."
    },
    {
        chronofloId: 73256,
        title: "Gemistus Plethon",
        startDate: "1355-01-01 00:00:00",
        endDate: "1452-01-01 00:00:00",
        sourceText: "Georgios Gemistos Plethon, commonly known as Gemistos Plethon, was a Greek scholar and one of the most renowned philosophers of the late Byzantine era. He was a chief pioneer of the revival of Greek scholarship in Western Europe. As revealed in his last..."
    },
    {
        chronofloId: 73259,
        title: "Nicholas of Cusa",
        startDate: "1401-01-01 00:00:00",
        endDate: "1464-01-01 00:00:00",
        sourceText: "Nicholas of Cusa, also referred to as Nicholas of Kues and Nicolaus Cusanus, was a German philosopher, theologian, Catholic cleric, jurist, mathematician and astronomer. One of the first German proponents of Renaissance humanism, he made spiritual and..."
    },
    {
        chronofloId: 73260,
        title: "Lorenzo Valla",
        startDate: "1407-01-01 00:00:00",
        endDate: "1457-01-01 00:00:00",
        sourceText: "Lorenzo Valla was an Italian Renaissance humanist, rhetorician, educator, scholar, and Catholic priest. He is best known for his historical-critical textual analysis that proved that the Donation of Constantine was a forgery, therefore attacking and..."
    },
    {
        chronofloId: 73261,
        title: "Marsilio Ficino",
        startDate: "1433-01-01 00:00:00",
        endDate: "1499-01-01 00:00:00",
        sourceText: "Marsilio Ficino was an Italian scholar and Catholic priest who was one of the most influential humanist philosophers of the early Italian Renaissance. He was an astrologer, a reviver of Neoplatonism in touch with the major academics of his day, and the..."
    },
    {
        chronofloId: 73262,
        title: "Pico della Mirandola",
        startDate: "1463-01-01 00:00:00",
        endDate: "1494-01-01 00:00:00",
        sourceText: "Giovanni Pico della Mirandola was an Italian Renaissance nobleman and philosopher. He is famed for the events of 1486, when, at the age of 23, he proposed to defend 900 theses on religion, philosophy, natural philosophy, and magic against all comers, for..."
    },
    {
        chronofloId: 73264,
        title: "Desiderius Erasmus",
        startDate: "1466-01-01 00:00:00",
        endDate: "1536-01-01 00:00:00",
        sourceText: "Desiderius Erasmus Roterodamus was a Dutch philosopher and Catholic theologian who is considered one of the greatest scholars of the northern Renaissance. As a Catholic priest, he was an important figure in classical scholarship who wrote in a pure Latin..."
    },
    {
        chronofloId: 73263,
        title: "Niccolò Machiavelli",
        startDate: "1469-01-01 00:00:00",
        endDate: "1527-01-01 00:00:00",
        sourceText: "Niccolò di Bernardo dei Machiavelli was an Italian diplomat, author, philosopher, and historian who lived during the Renaissance. He is best known for his political treatise The Prince, written in 1513 but not published until 1532. He has often been..."
    },
    {
        chronofloId: 73266,
        title: "Nicolaus Copernicus",
        startDate: "1473-01-01 00:00:00",
        endDate: "1543-01-01 00:00:00",
        sourceText: "Nicolaus Copernicus was a Renaissance polymath, active as a mathematician, astronomer, and Catholic canon, who formulated a model of the universe that placed the Sun rather than Earth at its center. In all likelihood, Copernicus developed his model..."
    },
    {
        chronofloId: 73268,
        title: "Sir Thomas More",
        startDate: "1478-01-01 00:00:00",
        endDate: "1535-01-01 00:00:00",
        sourceText: "Sir Thomas More, venerated in the Catholic Church as Saint Thomas More, was an English lawyer, judge, social philosopher, author, statesman, and noted Renaissance humanist. He also served Henry VIII as Lord High Chancellor of England from October 1529 to..."
    },
    {
        chronofloId: 73265,
        title: "Martin Luther",
        startDate: "1483-01-01 00:00:00",
        endDate: "1546-01-01 00:00:00",
        sourceText: "Martin Luther was a German priest, theologian, author, composer, former Augustinian friar, and is best known as a seminal figure in the Protestant Reformation and as the namesake of Lutheranism."
    },
    {
        chronofloId: 73267,
        title: "John Calvin",
        startDate: "1509-01-01 00:00:00",
        endDate: "1564-01-01 00:00:00",
        sourceText: "John Calvin was a French theologian, pastor and reformer in Geneva during the Protestant Reformation. He was a principal figure in the development of the system of Christian theology later called Calvinism, including its doctrines of predestination and of..."
    },
    {
        chronofloId: 73269,
        title: "Petrus Ramus",
        startDate: "1515-01-01 00:00:00",
        endDate: "1572-01-01 00:00:00",
        sourceText: "Petrus Ramus was an influential French humanist, logician, and educational reformer. A Protestant convert, he was one of the most prominent victims of the St. Bartholomew's Day massacre."
    },
    {
        chronofloId: 73270,
        title: "Michel de Montaigne",
        startDate: "1533-01-01 00:00:00",
        endDate: "1592-01-01 00:00:00",
        sourceText: "Michel Eyquem de Montaigne, also known as Lord of Montaigne, was one of the most significant philosophers of the French Renaissance. He is known for popularizing the essay as a literary genre. His work is noted for its merging of casual anecdotes and..."
    },
    {
        chronofloId: 73272,
        title: "Pierre Charron",
        startDate: "1541-01-01 00:00:00",
        endDate: "1603-01-01 00:00:00",
        sourceText: "Pierre Charron, French Catholic theologian and major contributor to the new thought of the 17th century. He is remembered for his controversial form of skepticism and his separation of ethics from religion as an independent philosophical discipline."
    },
    {
        chronofloId: 73273,
        title: "Francisco Suárez",
        startDate: "1548-01-01 00:00:00",
        endDate: "1617-01-01 00:00:00",
        sourceText: "Francisco Suárez, was a Spanish Jesuit priest, philosopher and theologian, one of the leading figures of the School of Salamanca movement, and generally regarded among the greatest scholastics after Thomas Aquinas. His work is considered a turning point..."
    },
    {
        chronofloId: 73271,
        title: "Giordano Bruno",
        startDate: "1548-01-01 00:00:00",
        endDate: "1600-01-01 00:00:00",
        sourceText: "Giordano Bruno was an Italian Dominican friar, philosopher, mathematician, poet, cosmological theorist, and Hermetic occultist. He is known for his cosmological theories, which conceptually extended the then novel Copernican model. He proposed that the..."
    },
    {
        chronofloId: 73274,
        title: "Francis Bacon",
        startDate: "1561-01-01 00:00:00",
        endDate: "1626-01-01 00:00:00",
        sourceText: "Francis Bacon, 1st Viscount St Alban, was an English philosopher and statesman who served as Attorney General and as Lord Chancellor of England. His works are seen as developing the scientific method and remained influential through the scientific..."
    },
    {
        chronofloId: 73275,
        title: "Galileo Galilei",
        startDate: "1564-01-01 00:00:00",
        endDate: "1642-01-01 00:00:00",
        sourceText: "Galileo di Vincenzo Bonaiuti de' Galilei, commonly referred to as Galileo, was an Italian astronomer, physicist and engineer, sometimes described as a polymath, from the city of Pisa, then part of the Duchy of Florence. Galileo has been called the..."
    },
    {
        chronofloId: 73278,
        title: "Johannes Kepler",
        startDate: "1571-01-01 00:00:00",
        endDate: "1630-01-01 00:00:00",
        sourceText: "Johannes Kepler was a German astronomer, mathematician, astrologer, natural philosopher and writer on music. He is a key figure in the 17th-century Scientific Revolution, best known for his laws of planetary motion, and his books Astronomia nova,..."
    },
    {
        chronofloId: 73276,
        title: "Molla-Sadra",
        startDate: "1572-01-01 00:00:00",
        endDate: "1640-01-01 00:00:00",
        sourceText: "Ṣadr ad-Dīn Muḥammad Shīrāzī, also called Mullā Ṣadrā, was a Persian Twelver Shi'i Islamic mystic, philosopher, theologian, and ‘Ālim who led the Iranian cultural renaissance in the 17th century. According to Oliver Leaman, Mulla Sadra is arguably the..."
    },
    {
        chronofloId: 73277,
        title: "Herbert of Cherbury",
        startDate: "1583-01-01 00:00:00",
        endDate: "1648-01-01 00:00:00",
        sourceText: "Edward Herbert, 1st Baron Herbert of Cherbury KB was an Anglo-Welsh soldier, diplomat, historian, poet and religious philosopher of the Kingdom of England."
    },
    {
        chronofloId: 73279,
        title: "Hugo Grotius",
        startDate: "1583-01-01 00:00:00",
        endDate: "1645-01-01 00:00:00",
        sourceText: "Hugo Grotius, also known as Huig de Groot and in Dutch as Hugo de Groot, was a Dutch humanist, diplomat, lawyer, theologian, jurist, poet and playwright."
    },
    {
        chronofloId: 73280,
        title: "François de La Mothe Le Vayer",
        startDate: "1588-01-01 00:00:00",
        endDate: "1672-01-01 00:00:00",
        sourceText: "François de La Mothe Le Vayer, was a French writer who was known to use the pseudonym Orosius Tubero. He was admitted to the Académie française in 1639, and was the tutor of Louis XIV."
    },
    {
        chronofloId: 73282,
        title: "Marin Mersenne",
        startDate: "1588-01-01 00:00:00",
        endDate: "1648-01-01 00:00:00",
        sourceText: "Marin Mersenne was a French polymath whose works touched a wide variety of fields. He is perhaps best known today among mathematicians for Mersenne prime numbers, those which can be written in the form Mn = 2n − 1 for some integer n. He also developed..."
    },
    {
        chronofloId: 73281,
        title: "Robert Filmer",
        startDate: "1588-01-01 00:00:00",
        endDate: "1653-01-01 00:00:00",
        sourceText: "Sir Robert Filmer was an English political theorist who defended the divine right of kings. His best known work, Patriarcha, published posthumously in 1680, was the target of numerous Whig attempts at rebuttal, including Algernon Sidney's Discourses..."
    },
    {
        chronofloId: 73284,
        title: "Thomas Hobbes",
        startDate: "1588-01-01 00:00:00",
        endDate: "1679-01-01 00:00:00",
        sourceText: "Thomas Hobbes was an English philosopher, considered to be one of the founders of modern political philosophy. Hobbes is best known for his 1651 book Leviathan, in which he expounds an influential formulation of social contract theory. In addition to..."
    },
    {
        chronofloId: 73283,
        title: "Pierre Gassendi",
        startDate: "1592-01-01 00:00:00",
        endDate: "1655-01-01 00:00:00",
        sourceText: "Pierre Gassendi was a French philosopher, Catholic priest, astronomer, and mathematician. While he held a church position in south-east France, he also spent much time in Paris, where he was a leader of a group of free-thinking intellectuals. He was also..."
    },
    {
        chronofloId: 73288,
        title: "René Descartes",
        startDate: "1596-01-01 00:00:00",
        endDate: "1650-01-01 00:00:00",
        sourceText: "René Descartes was a French philosopher, mathematician, scientist and lay Catholic who invented analytic geometry, linking the previously separate fields of geometry and algebra. He spent a large portion of his working life in the Dutch Republic,..."
    },
    {
        chronofloId: 73285,
        title: "Baltasar Gracián",
        startDate: "1601-01-01 00:00:00",
        endDate: "1658-01-01 00:00:00",
        sourceText: "Baltasar Gracián y Morales, S.J., better known as Baltasar Gracián, was a Spanish Jesuit and baroque prose writer and philosopher. He was born in Belmonte, near Calatayud (Aragon). His writings were lauded by Schopenhauer and Nietzsche."
    },
    {
        chronofloId: 73287,
        title: "Antoine Arnauld",
        startDate: "1612-01-01 00:00:00",
        endDate: "1694-01-01 00:00:00",
        sourceText: "Antoine Arnauld was a French Catholic theologian, philosopher and mathematician. He was one of the leading intellectuals of the Jansenist group of Port-Royal and had a very thorough knowledge of patristics. Contemporaries called him le Grand to..."
    },
    {
        chronofloId: 73286,
        title: "François de La Rochefoucauld",
        startDate: "1613-01-01 00:00:00",
        endDate: "1680-01-01 00:00:00",
        sourceText: "François VI, Duc de La Rochefoucauld, Prince de Marcillac was a noted French moralist and author of maxims and memoirs. He is part of the literary movement of classicism and best known for his maxims. Although he only officially published his Memoirs and..."
    },
    {
        chronofloId: 73289,
        title: "Henry More",
        startDate: "1614-01-01 00:00:00",
        endDate: "1687-01-01 00:00:00",
        sourceText: "Henry More was an English philosopher of the Cambridge Platonist school."
    },
    {
        chronofloId: 73290,
        title: "Jacques Rohault",
        startDate: "1617-01-01 00:00:00",
        endDate: "1672-01-01 00:00:00",
        sourceText: "Jacques Rohault was a French philosopher, physicist and mathematician, and a follower of Cartesianism."
    },
    {
        chronofloId: 73291,
        title: "Ralph Cudworth",
        startDate: "1617-01-01 00:00:00",
        endDate: "1688-01-01 00:00:00",
        sourceText: "Ralph Cudworth was an English Anglican clergyman, Christian Hebraist, classicist, theologian and philosopher, and a leading figure among the Cambridge Platonists who became 11th Regius Professor of Hebrew (1645–88), 26th Master of Clare Hall (1645–54),..."
    },
    {
        chronofloId: 73292,
        title: "Blaise Pascal",
        startDate: "1623-01-01 00:00:00",
        endDate: "1662-01-01 00:00:00",
        sourceText: "Blaise Pascal was a French mathematician, physicist, inventor, philosopher, writer, and Catholic theologian."
    },
    {
        chronofloId: 73293,
        title: "Margaret Cavendish",
        startDate: "1623-01-01 00:00:00",
        endDate: "1673-01-01 00:00:00",
        sourceText: "Margaret Lucas Cavendish, Duchess of Newcastle-upon-Tyne was an English philosopher, poet, scientist, fiction writer and playwright. Being related to royalists, she spent some of the English Civil War in France. She wrote in her own name in a period when..."
    },
    {
        chronofloId: 73294,
        title: "Arnold Geulincx",
        startDate: "1624-01-01 00:00:00",
        endDate: "1669-01-01 00:00:00",
        sourceText: "Arnold Geulincx, also known by his pseudonym Philaretus, was a Flemish philosopher, metaphysician, and logician. He was one of the followers of René Descartes who tried to work out more detailed versions of a generally Cartesian philosophy. Samuel Beckett..."
    },
    {
        chronofloId: 73295,
        title: "Pierre Nicole",
        startDate: "1625-01-01 00:00:00",
        endDate: "1695-01-01 00:00:00",
        sourceText: "Pierre Nicole was one of the most distinguished of the French Jansenists."
    },
    {
        chronofloId: 73296,
        title: "Géraud de Cordemoy",
        startDate: "1626-01-01 00:00:00",
        endDate: "1684-01-01 00:00:00",
        sourceText: "Géraud de Cordemoy was a French philosopher, historian and lawyer. He is mainly known for his works in metaphysics and for his theory of language."
    },
    {
        chronofloId: 73297,
        title: "Robert Boyle",
        startDate: "1627-01-01 00:00:00",
        endDate: "1691-01-01 00:00:00",
        sourceText: "Robert Boyle was an Anglo-Irish natural philosopher, chemist, physicist, and inventor. Boyle is largely regarded today as the first modern chemist, and therefore one of the founders of modern chemistry, and one of the pioneers of modern experimental..."
    },
    {
        chronofloId: 73299,
        title: "Anne Conway",
        startDate: "1631-01-01 00:00:00",
        endDate: "1679-01-01 00:00:00",
        sourceText: "Anne Conway was an English philosopher whose work, in the tradition of the Cambridge Platonists, was an influence on Gottfried Leibniz. Conway's thought is a deeply original form of rationalist philosophy, with hallmarks of gynocentric concerns and..."
    },
    {
        chronofloId: 73298,
        title: "Richard Cumberland",
        startDate: "1631-01-01 00:00:00",
        endDate: "1718-01-01 00:00:00",
        sourceText: "Richard Cumberland was an English philosopher, and Bishop of Peterborough from 1691. In 1672, he published his major work, De legibus naturae, propounding utilitarianism and opposing the egoistic ethics of Thomas Hobbes."
    },
    {
        chronofloId: 73300,
        title: "Baruch Spinoza",
        startDate: "1632-01-01 00:00:00",
        endDate: "1677-01-01 00:00:00",
        sourceText: "Baruch (de) Spinoza was a Dutch philosopher of Portuguese Sephardic Jewish origin. One of the foremost exponents of 17th-century Rationalism and one of the early and seminal thinkers of the Enlightenment and modern biblical criticism including modern..."
    },
    {
        chronofloId: 73303,
        title: "John Locke",
        startDate: "1632-01-01 00:00:00",
        endDate: "1704-01-01 00:00:00",
        sourceText: "John Locke was an English philosopher and physician, widely regarded as one of the most influential of Enlightenment thinkers and commonly known as the \"Father of Liberalism\". Considered one of the first of the British empiricists, following the tradition..."
    },
    {
        chronofloId: 73301,
        title: "Samuel von Pufendorf",
        startDate: "1632-01-01 00:00:00",
        endDate: "1694-01-01 00:00:00",
        sourceText: "Samuel Freiherr von Pufendorf was a German jurist, political philosopher, economist and historian. He was born Samuel Pufendorf and ennobled in 1694; he was made a baron by Charles XI of Sweden a few months before his death at age 62. Among his..."
    },
    {
        chronofloId: 73302,
        title: "Joseph Glanvill",
        startDate: "1636-01-01 00:00:00",
        endDate: "1680-01-01 00:00:00",
        sourceText: "Joseph Glanvill was an English writer, philosopher, and clergyman. Not himself a scientist, he has been called \"the most skillful apologist of the virtuosi\", or in other words the leading propagandist for the approach of the English natural philosophers..."
    },
    {
        chronofloId: 73304,
        title: "Nicolas Malebranche",
        startDate: "1638-01-01 00:00:00",
        endDate: "1715-01-01 00:00:00",
        sourceText: "Nicolas Malebranche was a French Oratorian Catholic priest and rationalist philosopher. In his works, he sought to synthesize the thought of St. Augustine and Descartes, in order to demonstrate the active role of God in every aspect of the world...."
    },
    {
        chronofloId: 73306,
        title: "Isaac Newton",
        startDate: "1643-01-01 00:00:00",
        endDate: "1727-01-01 00:00:00",
        sourceText: "Sir Isaac Newton was an English mathematician, physicist, astronomer, alchemist, theologian, and author widely recognised as one of the greatest mathematicians and physicists of all time and among the most influential scientists. He was a key figure in..."
    },
    {
        chronofloId: 73309,
        title: "Simon Foucher",
        startDate: "1644-01-01 00:00:00",
        endDate: "1696-01-01 00:00:00",
        sourceText: "Simon Foucher was a French polemic philosopher. His philosophical standpoint was one of Academic skepticism: he did not agree with dogmatism, but didn't resort to Pyrrhonism, either."
    },
    {
        chronofloId: 73307,
        title: "Gottfried Leibniz",
        startDate: "1646-01-01 00:00:00",
        endDate: "1716-01-01 00:00:00",
        sourceText: "Gottfried Wilhelm (von) Leibniz was a German polymath active as a mathematician, philosopher, scientist, and diplomat. He is a prominent figure in both the history of philosophy and the history of mathematics. He wrote works on philosophy, theology,..."
    },
    {
        chronofloId: 73305,
        title: "John Flamsteed",
        startDate: "1646-01-01 00:00:00",
        endDate: "1719-01-01 00:00:00",
        sourceText: "John Flamsteed FRS was an English astronomer and the first Astronomer Royal. His main achievements were the preparation of a 3,000-star catalogue, Catalogus Britannicus, and a star atlas called Atlas Coelestis, both published posthumously. He also made..."
    },
    {
        chronofloId: 73310,
        title: "Pierre Bayle",
        startDate: "1647-01-01 00:00:00",
        endDate: "1706-01-01 00:00:00",
        sourceText: "Pierre Bayle was a French philosopher, author, and lexicographer. A Huguenot, Bayle fled to the Dutch Republic in 1681 because of religious persecution in France. He is best known for his Historical and Critical Dictionary, whose publication began in..."
    },
    {
        chronofloId: 73308,
        title: "John Norris",
        startDate: "1657-01-01 00:00:00",
        endDate: "1711-01-01 00:00:00",
        sourceText: "John Norris, sometimes called John Norris of Bemerton (1657–1712), was an English theologian, philosopher and poet associated with the Cambridge Platonists."
    },
    {
        chronofloId: 73311,
        title: "Damaris Masham",
        startDate: "1659-01-01 00:00:00",
        endDate: "1708-01-01 00:00:00",
        sourceText: "Damaris, Lady Masham was an English writer, philosopher, theologian, and advocate for women's education who is characterized as a proto-feminist. She overcame some weakness of eyesight and lack of access to formal higher education to win high regard among..."
    },
    {
        chronofloId: 73312,
        title: "Jean Meslier",
        startDate: "1664-01-01 00:00:00",
        endDate: "1729-01-01 00:00:00",
        sourceText: "Jean Meslier was a French Catholic priest (abbé) who was discovered, upon his death, to have written a book-length philosophical essay promoting atheism and materialism. Described by the author as his \"testament\" to his parishioners, the text criticizes..."
    },
    {
        chronofloId: 73313,
        title: "Giambattista Vico",
        startDate: "1668-01-01 00:00:00",
        endDate: "1744-01-01 00:00:00",
        sourceText: "Giambattista Vico was an Italian philosopher, rhetorician, historian, and jurist during the Italian Enlightenment. He criticized the expansion and development of modern rationalism, was an apologist for classical antiquity and the Renaissance humanities,..."
    },
    {
        chronofloId: 73316,
        title: "Bernard Mandeville",
        startDate: "1670-01-01 00:00:00",
        endDate: "1733-01-01 00:00:00",
        sourceText: "Bernard Mandeville, or Bernard de Mandeville, was an Anglo-Dutch philosopher, political economist and satirist. Born in Rotterdam, Netherlands, he lived most of his life in England and used English for most of his published works. He became famous for The..."
    },
    {
        chronofloId: 73314,
        title: "John Toland",
        startDate: "1670-01-01 00:00:00",
        endDate: "1722-01-01 00:00:00",
        sourceText: "John Toland was an Irish rationalist philosopher and freethinker, and occasional satirist, who wrote numerous books and pamphlets on political philosophy and philosophy of religion, which are early expressions of the philosophy of the Age of..."
    },
    {
        chronofloId: 73319,
        title: "Anthony Ashley-Cooper",
        startDate: "1671-01-01 00:00:00",
        endDate: "1713-01-01 00:00:00",
        sourceText: "Anthony Ashley Cooper, 3rd Earl of Shaftesbury was an English politician, philosopher, and writer."
    },
    {
        chronofloId: 73315,
        title: "Dimitrie Cantemir",
        startDate: "1674-01-01 00:00:00",
        endDate: "1723-01-01 00:00:00",
        sourceText: "Dimitrie or Demetrius Cantemir, also known by other spellings, was a Moldavian prince, statesman, and man of letters, regarded as one of the most significant early Enlightenment figures. He twice served as voivode of Moldavia. During his second term he..."
    },
    {
        chronofloId: 73318,
        title: "Samuel Clarke",
        startDate: "1675-01-01 00:00:00",
        endDate: "1729-01-01 00:00:00",
        sourceText: "Samuel Clarke was an English philosopher and Anglican cleric. He is considered the major British figure in philosophy between John Locke and George Berkeley."
    },
    {
        chronofloId: 73317,
        title: "Catherine Cockburn",
        startDate: "1679-01-01 00:00:00",
        endDate: "1749-01-01 00:00:00",
        sourceText: "Catharine Trotter Cockburn was an English novelist, dramatist, and philosopher. She wrote on moral philosophy, theological tracts, and had a voluminous correspondence."
    },
    {
        chronofloId: 73320,
        title: "Christian Wolff",
        startDate: "1679-01-01 00:00:00",
        endDate: "1754-01-01 00:00:00",
        sourceText: "Christian Wolff was a German philosopher. Wolff was the most eminent German philosopher between Leibniz and Kant. His main achievement was a complete oeuvre on almost every scholarly subject of his time, displayed and unfolded according to his..."
    },
    {
        chronofloId: 73321,
        title: "George Berkeley",
        startDate: "1685-01-01 00:00:00",
        endDate: "1753-01-01 00:00:00",
        sourceText: "George Berkeley – known as Bishop Berkeley – was an Anglo-Irish philosopher whose primary achievement was the advancement of a theory he called \"immaterialism\". This theory denies the existence of material substance and instead contends that familiar..."
    },
    {
        chronofloId: 73322,
        title: "Montesquieu",
        startDate: "1689-01-01 00:00:00",
        endDate: "1755-01-01 00:00:00",
        sourceText: "Charles Louis de Secondat, Baron de La Brède et de Montesquieu, generally referred to as simply Montesquieu, was a French judge, man of letters, historian, and political philosopher."
    },
    {
        chronofloId: 73323,
        title: "Joseph Butler",
        startDate: "1692-01-01 00:00:00",
        endDate: "1752-01-01 00:00:00",
        sourceText: "Joseph Butler was an English Anglican bishop, theologian, apologist, and philosopher, born in Wantage in the English county of Berkshire. He is known for critiques of Deism, Thomas Hobbes's egoism, and John Locke's theory of personal identity. The many..."
    },
    {
        chronofloId: 73324,
        title: "Francis Hutcheson",
        startDate: "1694-01-01 00:00:00",
        endDate: "1746-01-01 00:00:00",
        sourceText: "Francis Hutcheson LLD was an Irish philosopher born in Ulster to a family of Scottish Presbyterians who became known as one of the founding fathers of the Scottish Enlightenment. He was Professor of Moral Philosophy at Glasgow University and is remembered..."
    },
    {
        chronofloId: 73326,
        title: "Voltaire",
        startDate: "1694-01-01 00:00:00",
        endDate: "1778-01-01 00:00:00",
        sourceText: "François-Marie Arouet, known by his nom de plume Voltaire, was a French Enlightenment writer, historian, and philosopher famous for his wit, his criticism of Christianity—especially the Roman Catholic Church—as well as his advocacy of freedom of speech,..."
    },
    {
        chronofloId: 73328,
        title: "John Gay",
        startDate: "1699-01-01 00:00:00",
        endDate: "1745-01-01 00:00:00",
        sourceText: "John Gay, a cousin of the poet John Gay, was an English philosopher, biblical scholar and Church of England clergyman. The greatest happiness principle, Gay supposed, represented a middle ground between the egoism of Hobbes and Hutcheson’s moral sense theory."
    },
    {
        chronofloId: 73325,
        title: "Jonathan Edwards",
        startDate: "1703-01-01 00:00:00",
        endDate: "1758-01-01 00:00:00",
        sourceText: "Jonathan Edwards was an American revivalist preacher, philosopher and Congregationalist theologian. Edwards is widely regarded as one of America's most important and original philosophical theologians. Edwards' theological work is broad in scope, but..."
    },
    {
        chronofloId: 73327,
        title: "David Hartley",
        startDate: "1705-01-01 00:00:00",
        endDate: "1757-01-01 00:00:00",
        sourceText: "David Hartley was an English philosopher and founder of the Associationist school of psychology."
    },
    {
        chronofloId: 73329,
        title: "Julien La Mettrie",
        startDate: "1709-01-01 00:00:00",
        endDate: "1751-01-01 00:00:00",
        sourceText: "Julien Offray de La Mettrie was a French physician and philosopher, and one of the earliest of the French materialists of the Enlightenment. He is best known for his work L'homme machine."
    },
    {
        chronofloId: 73330,
        title: "Thomas Reid",
        startDate: "1710-01-01 00:00:00",
        endDate: "1796-01-01 00:00:00",
        sourceText: "Thomas Reid was a religiously trained Scottish philosopher. He was the founder of the Scottish School of Common Sense and played an integral role in the Scottish Enlightenment. In 1783 he was a joint founder of the Royal Society of Edinburgh. A..."
    },
    {
        chronofloId: 73333,
        title: "David Hume",
        startDate: "1711-01-01 00:00:00",
        endDate: "1776-01-01 00:00:00",
        sourceText: "David Hume was a Scottish Enlightenment philosopher, historian, economist, librarian and essayist, who is best known today for his highly influential system of philosophical empiricism, skepticism, and naturalism. Beginning with A Treatise of Human Nature..."
    },
    {
        chronofloId: 73331,
        title: "Jean–Jacques Rousseau",
        startDate: "1712-01-01 00:00:00",
        endDate: "1778-01-01 00:00:00",
        sourceText: "Jean-Jacques Rousseau was a Genevan philosopher, writer, and composer. His political philosophy influenced the progress of the Enlightenment throughout Europe, as well as aspects of the French Revolution and the development of modern political, economic,..."
    },
    {
        chronofloId: 73332,
        title: "Denis Diderot",
        startDate: "1713-01-01 00:00:00",
        endDate: "1784-01-01 00:00:00",
        sourceText: "Denis Diderot was a French philosopher, art critic, and writer, best known for serving as co-founder, chief editor, and contributor to the Encyclopédie along with Jean le Rond d'Alembert. He was a prominent figure during the Age of Enlightenment."
    },
    {
        chronofloId: 73334,
        title: "Alexander Gottlieb Baumgarten",
        startDate: "1714-01-01 00:00:00",
        endDate: "1762-01-01 00:00:00",
        sourceText: "Alexander Gottlieb Baumgarten was a German philosopher. He was a brother to theologian Siegmund Jakob Baumgarten (1706–1757)."
    },
    {
        chronofloId: 73336,
        title: "Claude Adrien Helvétius",
        startDate: "1715-01-01 00:00:00",
        endDate: "1771-01-01 00:00:00",
        sourceText: "Claude Adrien Helvétius was a French philosopher, freemason and littérateur."
    },
    {
        chronofloId: 73335,
        title: "Etienne de Condillac",
        startDate: "1715-01-01 00:00:00",
        endDate: "1780-01-01 00:00:00",
        sourceText: "Étienne Bonnot de Condillac was a French philosopher and epistemologist, who studied in such areas as psychology and the philosophy of the mind."
    },
    {
        chronofloId: 73338,
        title: "Jean d'Alembert",
        startDate: "1717-01-01 00:00:00",
        endDate: "1783-01-01 00:00:00",
        sourceText: "Jean-Baptiste le Rond d'Alembert was a French mathematician, mechanician, physicist, philosopher, and music theorist. Until 1759 he was, together with Denis Diderot, a co-editor of the Encyclopédie. D'Alembert's formula for obtaining solutions to the wave..."
    },
    {
        chronofloId: 73340,
        title: "Adam Smith",
        startDate: "1723-01-01 00:00:00",
        endDate: "1790-01-01 00:00:00",
        sourceText: "Adam Smith was a Scottish economist and philosopher who was a pioneer of political economy and key figure during the Scottish Enlightenment. Also known as \"The Father of Economics\" or \"The Father of Capitalism\", he wrote two classic works, The Theory of..."
    },
    {
        chronofloId: 73337,
        title: "Baron d'Holbach",
        startDate: "1723-01-01 00:00:00",
        endDate: "1789-01-01 00:00:00",
        sourceText: "Paul-Henri Thiry, Baron d'Holbach, was a French-German philosopher, encyclopedist, writer, and prominent figure in the French Enlightenment. He was born Paul Heinrich Dietrich in Edesheim, near Landau in the Rhenish Palatinate, but lived and worked mainly..."
    },
    {
        chronofloId: 73339,
        title: "Richard Price",
        startDate: "1723-01-01 00:00:00",
        endDate: "1791-01-01 00:00:00",
        sourceText: "Richard Price was a Welsh moral philosopher, Nonconformist minister and mathematician. He was also a political reformer, pamphleteer, active in radical, republican, and liberal causes such as the French and American Revolutions. He was well-connected and..."
    },
    {
        chronofloId: 73341,
        title: "Immanuel Kant",
        startDate: "1724-01-01 00:00:00",
        endDate: "1804-01-01 00:00:00",
        sourceText: "Immanuel Kant was a German philosopher and one of the central Enlightenment thinkers. Born in Königsberg, Kant's comprehensive and systematic works in epistemology, metaphysics, ethics, and aesthetics have made him an influential figure in modern Western..."
    },
    {
        chronofloId: 73343,
        title: "Edmund Burke",
        startDate: "1729-01-01 00:00:00",
        endDate: "1797-01-01 00:00:00",
        sourceText: "Edmund Burke was an Anglo-Irish statesman, economist, and philosopher. Born in Dublin, Burke served as a member of parliament (MP) between 1766 and 1794 in the House of Commons of Great Britain with the Whig Party after moving to London in 1750."
    },
    {
        chronofloId: 73342,
        title: "Gotthold Ephraim Lessing",
        startDate: "1729-01-01 00:00:00",
        endDate: "1781-01-01 00:00:00",
        sourceText: "Gotthold Ephraim Lessing was a German writer, philosopher, dramatist, publicist and art critic, and an outstanding representative of the Enlightenment era. His plays and theoretical writings substantially influenced the development of German literature...."
    },
    {
        chronofloId: 73344,
        title: "Moses Mendelssohn",
        startDate: "1729-01-01 00:00:00",
        endDate: "1786-01-01 00:00:00",
        sourceText: "Moses Mendelssohn was a German-Jewish philosopher to whose ideas the Haskalah, the 'Jewish Enlightenment' of the eighteenth and nineteenth centuries, is indebted."
    },
    {
        chronofloId: 73346,
        title: "Thomas Jefferson",
        startDate: "1743-01-01 00:00:00",
        endDate: "1826-01-01 00:00:00",
        sourceText: "Thomas Jefferson was an American statesman, diplomat, lawyer, architect, philosopher, and Founding Father whom served as the third president of the United States from 1801 to 1809. He had previously served as the second vice president of the United States..."
    },
    {
        chronofloId: 73345,
        title: "William Paley",
        startDate: "1743-01-01 00:00:00",
        endDate: "1805-01-01 00:00:00",
        sourceText: "William Paley was an English clergyman, Christian apologist, philosopher, and utilitarian. He is best known for his natural theology exposition of the teleological argument for the existence of God in his work Natural Theology or Evidences of the..."
    },
    {
        chronofloId: 73347,
        title: "Jean-Baptiste Lamarck",
        startDate: "1744-01-01 00:00:00",
        endDate: "1829-01-01 00:00:00",
        sourceText: "Jean-Baptiste Pierre Antoine de Monet, chevalier de Lamarck, often known simply as Lamarck, was a French naturalist. He was a soldier, biologist, and academic, and an early proponent of the idea that biological evolution occurred and proceeded in..."
    },
    {
        chronofloId: 73349,
        title: "Jeremy Bentham",
        startDate: "1748-01-01 00:00:00",
        endDate: "1832-01-01 00:00:00",
        sourceText: "Jeremy Bentham was an English philosopher, jurist, and social reformer regarded as the founder of modern utilitarianism."
    },
    {
        chronofloId: 73348,
        title: "Pierre-Simon Laplace",
        startDate: "1749-01-01 00:00:00",
        endDate: "1827-01-01 00:00:00",
        sourceText: "Pierre-Simon, marquis de Laplace was a French scholar and polymath whose work was important to the development of engineering, mathematics, statistics, physics, astronomy, and philosophy. He summarized and extended the work of his predecessors in his..."
    },
    {
        chronofloId: 73350,
        title: "Sylvain Maréchal",
        startDate: "1750-01-01 00:00:00",
        endDate: "1803-01-01 00:00:00",
        sourceText: "Sylvain Maréchal was a French essayist, poet, philosopher and political theorist, whose views presaged utopian socialism and communism. His views on a future golden age are occasionally described as utopian anarchism. He was editor of the newspaper..."
    },
    {
        chronofloId: 73351,
        title: "Dugald Stewart",
        startDate: "1753-01-01 00:00:00",
        endDate: "1828-01-01 00:00:00",
        sourceText: "Dugald Stewart was a Scottish philosopher and mathematician. Today regarded as one of the most important figures of the later Scottish Enlightenment, he was renowned as a populariser of the work of Francis Hutcheson and Adam Smith. His lectures at the..."
    },
    {
        chronofloId: 73353,
        title: "Joseph de Maistre",
        startDate: "1753-01-01 00:00:00",
        endDate: "1821-01-01 00:00:00",
        sourceText: "Joseph Marie, comte de Maistre was a Savoyard philosopher, writer, lawyer and diplomat who advocated social hierarchy and monarchy in the period immediately following the French Revolution. Despite his close personal and intellectual ties with France,..."
    },
    {
        chronofloId: 73352,
        title: "William Godwin",
        startDate: "1756-01-01 00:00:00",
        endDate: "1836-01-01 00:00:00",
        sourceText: "William Godwin was an English journalist, political philosopher and novelist. He is considered one of the first exponents of utilitarianism and the first modern proponent of anarchism. Godwin is most famous for two books that he published within the space..."
    },
    {
        chronofloId: 73356,
        title: "Friedrich Schiller",
        startDate: "1759-01-01 00:00:00",
        endDate: "1805-01-01 00:00:00",
        sourceText: "Johann Christoph Friedrich von Schiller was a German playwright, poet, and philosopher. During the last seventeen years of his life (1788–1805), Schiller developed a productive, if complicated, friendship with the already famous and influential Johann..."
    },
    {
        chronofloId: 73354,
        title: "Mary Wollstonecraft",
        startDate: "1759-01-01 00:00:00",
        endDate: "1797-01-01 00:00:00",
        sourceText: "Mary Wollstonecraft was an English writer, philosopher, and advocate of women's rights. Until the late 20th century, Wollstonecraft's life, which encompassed several unconventional personal relationships at the time, received more attention than her..."
    },
    {
        chronofloId: 73355,
        title: "Henri de Saint-Simon",
        startDate: "1760-01-01 00:00:00",
        endDate: "1825-01-01 00:00:00",
        sourceText: "Claude Henri de Rouvroy, comte de Saint-Simon, often referred to as Henri de Saint-Simon, was a French political, economic and socialist theorist and businessman whose thought had a substantial influence on politics, economics, sociology and the..."
    },
    {
        chronofloId: 73357,
        title: "Johann Gottlieb Fichte",
        startDate: "1762-01-01 00:00:00",
        endDate: "1814-01-01 00:00:00",
        sourceText: "Johann Gottlieb Fichte was a German philosopher who became a founding figure of the philosophical movement known as German idealism, which developed from the theoretical and ethical writings of Immanuel Kant. Recently, philosophers and scholars have begun..."
    },
    {
        chronofloId: 73358,
        title: "Germaine de Staël",
        startDate: "1766-01-01 00:00:00",
        endDate: "1817-01-01 00:00:00",
        sourceText: "Anne Louise Germaine de Staël-Holstein, commonly known as Madame de Staël, was a French woman of letters and political theorist, the daughter of banker and French finance minister Jacques Necker. She was a voice of moderation in the French Revolution and..."
    },
    {
        chronofloId: 73360,
        title: "Friedrich Schleiermacher",
        startDate: "1768-01-01 00:00:00",
        endDate: "1834-01-01 00:00:00",
        sourceText: "Friedrich Daniel Ernst Schleiermacher was a German Reformed theologian, philosopher, and biblical scholar known for his attempt to reconcile the criticisms of the Enlightenment with traditional Protestant Christianity. He also became influential in the..."
    },
    {
        chronofloId: 73359,
        title: "Georg Hegel",
        startDate: "1770-01-01 00:00:00",
        endDate: "1831-01-01 00:00:00",
        sourceText: "Georg Wilhelm Friedrich Hegel was a German philosopher. He is considered one of the most important figures in German idealism and one of the founding figures of Western philosophy, with his influence extending to the entire range of contemporary..."
    },
    {
        chronofloId: 73361,
        title: "James Mill",
        startDate: "1773-01-01 00:00:00",
        endDate: "1836-01-01 00:00:00",
        sourceText: "James Mill was a Scottish historian, economist, political theorist, and philosopher. He is counted among the founders of the Ricardian school of economics. He also wrote The History of British India. He was the first writer to divide Indian history into..."
    },
    {
        chronofloId: 73362,
        title: "Friedrich Schelling",
        startDate: "1775-01-01 00:00:00",
        endDate: "1854-01-01 00:00:00",
        sourceText: "Friedrich Wilhelm Joseph Schelling, later von Schelling, was a German philosopher. Standard histories of philosophy make him the midpoint in the development of German idealism, situating him between Johann Gottlieb Fichte, his mentor in his early years,..."
    },
    {
        chronofloId: 73363,
        title: "Bernard Bolzano",
        startDate: "1781-01-01 00:00:00",
        endDate: "1848-01-01 00:00:00",
        sourceText: "Bernard Bolzano was a Bohemian mathematician, logician, philosopher, theologian and Catholic priest of Italian extraction, also known for his liberal views."
    },
    {
        chronofloId: 73364,
        title: "Richard Whately",
        startDate: "1787-01-01 00:00:00",
        endDate: "1863-01-01 00:00:00",
        sourceText: "Richard Whately was an English academic, rhetorician, logician, philosopher, economist, and theologian who also served as a reforming Church of Ireland Archbishop of Dublin. He was a leading Broad Churchman, a prolific and combative author over a wide..."
    },
    {
        chronofloId: 73366,
        title: "Arthur Schopenhauer",
        startDate: "1788-01-01 00:00:00",
        endDate: "1860-01-01 00:00:00",
        sourceText: "Arthur Schopenhauer was a German philosopher. He is best known for his 1818 work The World as Will and Representation, which characterizes the phenomenal world as the product of a blind noumenal will. Building on the transcendental idealism of Immanuel..."
    },
    {
        chronofloId: 73367,
        title: "Sir William Hamilton, 9th Baronet",
        startDate: "1788-01-01 00:00:00",
        endDate: "1856-01-01 00:00:00",
        sourceText: "Sir William Hamilton, 9th Baronet FRSE was a Scottish metaphysician. He is often referred to as William Stirling Hamilton of Preston, in reference to his mother, Elizabeth Stirling."
    },
    {
        chronofloId: 73365,
        title: "John Austin",
        startDate: "1790-01-01 00:00:00",
        endDate: "1859-01-01 00:00:00",
        sourceText: "John Austin was an English legal theorist, who posthumously influenced British and American law with an analytical approach to jurisprudence and a theory of legal positivism. Austin opposed traditional approaches of \"natural law\", arguing against any need..."
    },
    {
        chronofloId: 73368,
        title: "William Whewell",
        startDate: "1794-01-01 00:00:00",
        endDate: "1866-01-01 00:00:00",
        sourceText: "William Whewell was an English polymath, scientist, Anglican priest, philosopher, theologian, and historian of science. He was Master of Trinity College, Cambridge. In his time as a student there, he achieved distinction in both poetry and mathematics."
    },
    {
        chronofloId: 73369,
        title: "Sojourner Truth",
        startDate: "1797-01-01 00:00:00",
        endDate: "1883-01-01 00:00:00",
        sourceText: "Sojourner Truth was an American abolitionist and women's rights activist. Truth was born into slavery in Swartekill, New York, but escaped with her infant daughter to freedom in 1826. After going to court to recover her son in 1828, she became the first..."
    },
    {
        chronofloId: 73370,
        title: "Auguste Comte",
        startDate: "1798-01-01 00:00:00",
        endDate: "1857-01-01 00:00:00",
        sourceText: "Isidore Marie Auguste François Xavier Comte was a French philosopher and writer who formulated the doctrine of positivism. He is often regarded as the first philosopher of science in the modern sense of the term. Comte's ideas were also fundamental to the..."
    },
    {
        chronofloId: 73373,
        title: "Ralph Waldo Emerson",
        startDate: "1803-01-01 00:00:00",
        endDate: "1882-01-01 00:00:00",
        sourceText: "Ralph Waldo Emerson, who went by his middle name Waldo, was an American essayist, lecturer, philosopher, abolitionist, and poet who led the transcendentalist movement of the mid-19th century. He was seen as a champion of individualism and a prescient..."
    },
    {
        chronofloId: 73372,
        title: "Ludwig Feuerbach",
        startDate: "1804-01-01 00:00:00",
        endDate: "1872-01-01 00:00:00",
        sourceText: "Ludwig Andreas von Feuerbach was a German anthropologist and philosopher, best known for his book The Essence of Christianity, which provided a critique of Christianity that strongly influenced generations of later thinkers, including Charles Darwin, Karl..."
    },
    {
        chronofloId: 73374,
        title: "Alexis de Tocqueville",
        startDate: "1805-01-01 00:00:00",
        endDate: "1859-01-01 00:00:00",
        sourceText: "Alexis Charles Henri Clérel, comte de Tocqueville, colloquially known as Tocqueville, was a French aristocrat, diplomat, political scientist, political philosopher and historian. He is best known for his works Democracy in America and The Old Regime and..."
    },
    {
        chronofloId: 73375,
        title: "Augustus De Morgan",
        startDate: "1806-01-01 00:00:00",
        endDate: "1871-01-01 00:00:00",
        sourceText: "Augustus De Morgan was a British mathematician and logician. He formulated De Morgan's laws and introduced the term mathematical induction, making its idea rigorous."
    },
    {
        chronofloId: 73376,
        title: "John Stuart Mill",
        startDate: "1806-01-01 00:00:00",
        endDate: "1873-01-01 00:00:00",
        sourceText: "John Stuart Mill was an English philosopher, political economist, Member of Parliament (MP) and civil servant. One of the most influential thinkers in the history of classical liberalism, he contributed widely to social theory, political theory, and..."
    },
    {
        chronofloId: 73371,
        title: "Max Stirner",
        startDate: "1806-01-01 00:00:00",
        endDate: "1856-01-01 00:00:00",
        sourceText: "Johann Kaspar Schmidt, known professionally as Max Stirner, was a German post-Hegelian philosopher, dealing mainly with the Hegelian notion of social alienation and self-consciousness. Stirner is often seen as one of the forerunners of nihilism,..."
    },
    {
        chronofloId: 73378,
        title: "Harriet Taylor Mill",
        startDate: "1807-01-01 00:00:00",
        endDate: "1858-01-01 00:00:00",
        sourceText: "Harriet Taylor Mill was a British philosopher and women's rights advocate. Her extant corpus of writing can be found in The Complete Works of Harriet Taylor Mill. Several pieces can also be found in The Collected Works of John Stuart Mill, especially..."
    },
    {
        chronofloId: 73379,
        title: "Charles Darwin",
        startDate: "1809-01-01 00:00:00",
        endDate: "1882-01-01 00:00:00",
        sourceText: "Charles Robert Darwin was an English naturalist, geologist and biologist, best known for his contributions to evolutionary biology. His proposition that all species of life have descended from common ancestors is now widely accepted and considered a..."
    },
    {
        chronofloId: 73377,
        title: "Pierre-Joseph Proudhon",
        startDate: "1809-01-01 00:00:00",
        endDate: "1865-01-01 00:00:00",
        sourceText: "Pierre-Joseph Proudhon was a French socialist, politician, philosopher, economist and the founder of mutualist philosophy. He was the first person to declare himself an anarchist, using that term, and is widely regarded as one of anarchism's most..."
    },
    {
        chronofloId: 73380,
        title: "Jaime Balmes",
        startDate: "1810-01-01 00:00:00",
        endDate: "1848-01-01 00:00:00",
        sourceText: "Jaime Luciano Balmes y Urpiá was a Spanish philosopher, theologian, Catholic apologist, sociologist and political writer. Familiar with the doctrine of Saint Thomas Aquinas, Balmes was an original philosopher who did not belong to any particular school or..."
    },
    {
        chronofloId: 73381,
        title: "Margaret Fuller",
        startDate: "1810-01-01 00:00:00",
        endDate: "1850-01-01 00:00:00",
        sourceText: "Sarah Margaret Fuller Ossoli was an American journalist, editor, critic, translator, and women's rights advocate associated with the American transcendentalism movement. She was the first American female war correspondent, writing for Horace Greeley's..."
    },
    {
        chronofloId: 73383,
        title: "Søren Kierkegaard",
        startDate: "1813-01-01 00:00:00",
        endDate: "1855-01-01 00:00:00",
        sourceText: "Søren Aabye Kierkegaard was a Danish theologian, philosopher, poet, social critic, and religious author who is widely considered to be the first existentialist philosopher. He wrote critical texts on organized religion, Christendom, morality, ethics,..."
    },
    {
        chronofloId: 73382,
        title: "Mikhail Bakunin",
        startDate: "1814-01-01 00:00:00",
        endDate: "1876-01-01 00:00:00",
        sourceText: "Mikhail Alexandrovich Bakunin was a Russian revolutionary anarchist, socialist and founder of collectivist anarchism. He is considered among the most influential figures of anarchism and a major founder of the revolutionary socialist and social anarchist..."
    },
    {
        chronofloId: 73384,
        title: "Elizabeth Cady Stanton",
        startDate: "1815-01-01 00:00:00",
        endDate: "1902-01-01 00:00:00",
        sourceText: "Elizabeth Cady Stanton was an American writer and activist who was a leader of the women's rights movement in the U.S. during the mid- to late-19th century. She was the main force behind the 1848 Seneca Falls Convention, the first convention to be called..."
    },
    {
        chronofloId: 73386,
        title: "Henry David Thoreau",
        startDate: "1817-01-01 00:00:00",
        endDate: "1862-01-01 00:00:00",
        sourceText: "Henry David Thoreau was an American naturalist, essayist, poet, and philosopher. A leading transcendentalist, he is best known for his book Walden, a reflection upon simple living in natural surroundings, and his essay \"Civil Disobedience\", an argument..."
    },
    {
        chronofloId: 73385,
        title: "Hermann Lotze",
        startDate: "1817-01-01 00:00:00",
        endDate: "1881-01-01 00:00:00",
        sourceText: "Rudolf Hermann Lotze was a German philosopher and logician. He also had a medical degree and was well versed in biology. He argued that if the physical world is governed by mechanical laws, relations and developments in the universe could be explained as..."
    },
    {
        chronofloId: 73390,
        title: "Karl Marx",
        startDate: "1818-01-01 00:00:00",
        endDate: "1883-01-01 00:00:00",
        sourceText: "Karl Heinrich Marx was a German philosopher, critic of political economy, economist, historian, sociologist, political theorist, journalist and socialist revolutionary. His best-known titles are the 1848 pamphlet The Communist Manifesto and the..."
    },
    {
        chronofloId: 73389,
        title: "Friedrich Engels",
        startDate: "1820-01-01 00:00:00",
        endDate: "1895-01-01 00:00:00",
        sourceText: "Friedrich Engels, sometimes anglicised as Frederick Engels, was a German philosopher, critic of political economy, historian, political theorist and revolutionary socialist. He was also a businessman, journalist and political activist, whose father was an..."
    },
    {
        chronofloId: 73387,
        title: "Herbert Spencer",
        startDate: "1820-01-01 00:00:00",
        endDate: "1903-01-01 00:00:00",
        sourceText: "Herbert Spencer was an English philosopher, biologist, anthropologist, and sociologist famous for his hypothesis of social Darwinism whereby superior physical force shapes history. Spencer originated the expression \"survival of the fittest\", which he..."
    },
    {
        chronofloId: 73388,
        title: "Susan B. Anthony",
        startDate: "1820-01-01 00:00:00",
        endDate: "1906-01-01 00:00:00",
        sourceText: "Susan B. Anthony was an American social reformer and women's rights activist who played a pivotal role in the women's suffrage movement. Born into a Quaker family committed to social equality, she collected anti-slavery petitions at the age of 17. In..."
    },
    {
        chronofloId: 73392,
        title: "Wilhelm Dilthey",
        startDate: "1833-01-01 00:00:00",
        endDate: "1911-01-01 00:00:00",
        sourceText: "Wilhelm Dilthey was a German historian, psychologist, sociologist, and hermeneutic philosopher, who held G. W. F. Hegel's Chair in Philosophy at the University of Berlin. As a polymathic philosopher, working in a modern research university, Dilthey's..."
    },
    {
        chronofloId: 73391,
        title: "Edward Caird",
        startDate: "1835-01-01 00:00:00",
        endDate: "1908-01-01 00:00:00",
        sourceText: "Edward Caird was a Scottish philosopher. He was a holder of LLD, DCL, and DLitt."
    },
    {
        chronofloId: 73394,
        title: "Thomas Hill Green",
        startDate: "1836-01-01 00:00:00",
        endDate: "1882-01-01 00:00:00",
        sourceText: "Thomas Hill Green, known as T. H. Green, was an English philosopher, political radical and temperance reformer, and a member of the British idealism movement. Like all the British idealists, Green was influenced by the metaphysical historicism of G. W. F...."
    },
    {
        chronofloId: 73396,
        title: "Ernst Mach",
        startDate: "1838-01-01 00:00:00",
        endDate: "1916-01-01 00:00:00",
        sourceText: "Ernst Waldfried Josef Wenzel Mach was an Austrian physicist and philosopher, noted for his contributions to physics such as the study of shock waves. The ratio of one's speed to that of sound is named the Mach number in his honour. As a philosopher of..."
    },
    {
        chronofloId: 73395,
        title: "Franz Brentano",
        startDate: "1838-01-01 00:00:00",
        endDate: "1917-01-01 00:00:00",
        sourceText: "Franz Clemens Honoratus Hermann Josef Brentano was an influential German philosopher, psychologist, and former Catholic priest whose work strongly influenced not only students Edmund Husserl, Sigmund Freud, Tomáš Masaryk, Rudolf Steiner, Alexius Meinong,..."
    },
    {
        chronofloId: 73393,
        title: "Henry Sidgwick",
        startDate: "1838-01-01 00:00:00",
        endDate: "1900-01-01 00:00:00",
        sourceText: "Henry Sidgwick was an English utilitarian philosopher and economist. He was the Knightbridge Professor of Moral Philosophy at the University of Cambridge from 1883 until his death, and is best known in philosophy for his utilitarian treatise The Methods..."
    },
    {
        chronofloId: 73397,
        title: "Charles Sanders Peirce",
        startDate: "1839-01-01 00:00:00",
        endDate: "1914-01-01 00:00:00",
        sourceText: "Charles Sanders Peirce was an American philosopher, logician, mathematician and scientist who is sometimes known as \"the father of pragmatism\". He was known as a somewhat unusual character."
    },
    {
        chronofloId: 73399,
        title: "Philipp Mainländer",
        startDate: "1841-01-01 00:00:00",
        endDate: "1876-01-01 00:00:00",
        sourceText: "Philipp Mainländer was a German philosopher and poet. Born Philipp Batz, he later changed his name to \"Mainländer\" in homage to his hometown, Offenbach am Main."
    },
    {
        chronofloId: 73401,
        title: "Hermann Cohen",
        startDate: "1842-01-01 00:00:00",
        endDate: "1918-01-01 00:00:00",
        sourceText: "Hermann Cohen was a German Jewish philosopher, one of the founders of the Marburg school of neo-Kantianism, and he is often held to be \"probably the most important Jewish philosopher of the nineteenth century\"."
    },
    {
        chronofloId: 73400,
        title: "Peter Kropotkin",
        startDate: "1842-01-01 00:00:00",
        endDate: "1921-01-01 00:00:00",
        sourceText: "Pyotr Alexeyevich Kropotkin was a Russian anarchist, socialist, revolutionary, economist, sociologist, historian, zoologist, political scientist, human geographer and philosopher who advocated anarcho-communism. He was also an activist, essayist,..."
    },
    {
        chronofloId: 73398,
        title: "William James",
        startDate: "1842-01-01 00:00:00",
        endDate: "1910-01-01 00:00:00",
        sourceText: "William James was an American philosopher, historian, and psychologist, and the first educator to offer a psychology course in the United States."
    },
    {
        chronofloId: 73404,
        title: "Friedrich Nietzsche",
        startDate: "1844-01-01 00:00:00",
        endDate: "1900-01-01 00:00:00",
        sourceText: "Friedrich Wilhelm Nietzsche was a German philosopher, cultural critic and philologist whose work has exerted a profound influence on modern intellectual history. He began his career as a classical philologist before turning to philosophy. He became the..."
    },
    {
        chronofloId: 73402,
        title: "W. K. Clifford",
        startDate: "1845-01-01 00:00:00",
        endDate: "1879-01-01 00:00:00",
        sourceText: "William Kingdon Clifford was an English mathematician and philosopher. Building on the work of Hermann Grassmann, he introduced what is now termed geometric algebra, a special case of the Clifford algebra named in his honour. The operations of geometric..."
    },
    {
        chronofloId: 73403,
        title: "F. H. Bradley",
        startDate: "1846-01-01 00:00:00",
        endDate: "1924-01-01 00:00:00",
        sourceText: "Francis Herbert Bradley was a British idealist philosopher. His most important work was Appearance and Reality (1893)."
    },
    {
        chronofloId: 73407,
        title: "Bernard Bosanquet",
        startDate: "1848-01-01 00:00:00",
        endDate: "1923-01-01 00:00:00",
        sourceText: "Bernard Bosanquet was an English philosopher and political theorist, and an influential figure on matters of political and social policy in the late 19th and early 20th centuries. His work influenced but was later subject to criticism by many thinkers,..."
    },
    {
        chronofloId: 73410,
        title: "Gottlob Frege",
        startDate: "1848-01-01 00:00:00",
        endDate: "1925-01-01 00:00:00",
        sourceText: "Friedrich Ludwig Gottlob Frege was a German philosopher, logician, and mathematician. He worked as a mathematics professor at the University of Jena, and is understood by many to be the father of analytic philosophy, concentrating on the philosophy of..."
    },
    {
        chronofloId: 73405,
        title: "Vilfredo Pareto",
        startDate: "1848-01-01 00:00:00",
        endDate: "1923-01-01 00:00:00",
        sourceText: "Vilfredo Federico Damaso Pareto was an Italian civil engineer, sociologist, economist, political scientist, and philosopher. He made several important contributions to economics, particularly in the study of income distribution and in the analysis of..."
    },
    {
        chronofloId: 73409,
        title: "John Cook Wilson",
        startDate: "1849-01-01 00:00:00",
        endDate: "1915-01-01 00:00:00",
        sourceText: "John Cook Wilson was an English philosopher. Belonging to a generation brought up in the atmosphere of British idealism, he espoused the cause of direct realism."
    },
    {
        chronofloId: 73406,
        title: "Hans Vaihinger",
        startDate: "1852-01-01 00:00:00",
        endDate: "1933-01-01 00:00:00",
        sourceText: "Hans Vaihinger was a German philosopher, best known as a Kant scholar and for his Die Philosophie des Als Ob, published in 1911 although its statement of basic principles had been written more than thirty years earlier."
    },
    {
        chronofloId: 73411,
        title: "Alexius Meinong",
        startDate: "1853-01-01 00:00:00",
        endDate: "1920-01-01 00:00:00",
        sourceText: "Alexius Meinong Ritter von Handschuchsheim was an Austrian philosopher, a realist known for his unique ontology. He also made contributions to philosophy of mind and theory of value."
    },
    {
        chronofloId: 73408,
        title: "David George Ritchie",
        startDate: "1853-01-01 00:00:00",
        endDate: "1903-01-01 00:00:00",
        sourceText: "David George Ritchie was a Scottish philosopher who had a distinguished university career at Edinburgh, and Balliol College, Oxford, and after being fellow of Jesus College and a tutor at Balliol College was elected professor of logic and metaphysics at..."
    },
    {
        chronofloId: 73412,
        title: "Henri Poincaré",
        startDate: "1854-01-01 00:00:00",
        endDate: "1912-01-01 00:00:00",
        sourceText: "Jules Henri Poincaré was a French mathematician, theoretical physicist, engineer, and philosopher of science. He is often described as a polymath, and in mathematics as \"The Last Universalist\", since he excelled in all fields of the discipline as it..."
    },
    {
        chronofloId: 73413,
        title: "Josiah Royce",
        startDate: "1855-01-01 00:00:00",
        endDate: "1916-01-01 00:00:00",
        sourceText: "Josiah Royce was an American objective idealist philosopher and the founder of American idealism. His philosophical ideas included his version of personalism, defense of absolutism, idealism and his conceptualization of God."
    },
    {
        chronofloId: 73415,
        title: "Andrew Seth Pringle-Pattison",
        startDate: "1856-01-01 00:00:00",
        endDate: "1931-01-01 00:00:00",
        sourceText: "Andrew Seth, FBA, DCL, who changed his name to Andrew Seth Pringle-Pattison in 1898 to fulfill the terms of a bequest, was a Scottish philosopher."
    },
    {
        chronofloId: 73414,
        title: "Sigmund Freud",
        startDate: "1856-01-01 00:00:00",
        endDate: "1939-01-01 00:00:00",
        sourceText: "Sigmund Freud was an Austrian neurologist and the founder of psychoanalysis, a clinical method for evaluating and treating pathologies in the psyche through dialogue between a patient and a psychoanalyst."
    },
    {
        chronofloId: 73419,
        title: "Ferdinand de Saussure",
        startDate: "1857-01-01 00:00:00",
        endDate: "1913-01-01 00:00:00",
        sourceText: "Ferdinand de Saussure was a Swiss linguist, semiotician and philosopher. His ideas laid a foundation for many significant developments in both linguistics and semiotics in the 20th century. He is widely considered one of the founders of 20th-century..."
    },
    {
        chronofloId: 73420,
        title: "Émile Durkheim",
        startDate: "1858-01-01 00:00:00",
        endDate: "1917-01-01 00:00:00",
        sourceText: "David Émile Durkheim was a French sociologist. He formally established the academic discipline of sociology and is commonly cited as one of the principal architects of modern social science, alongside Max Weber and Karl Marx."
    },
    {
        chronofloId: 73416,
        title: "Giuseppe Peano",
        startDate: "1858-01-01 00:00:00",
        endDate: "1932-01-01 00:00:00",
        sourceText: "Giuseppe Peano was an Italian mathematician and glottologist. The author of over 200 books and papers, he was a founder of mathematical logic and set theory, to which he contributed much notation. The standard axiomatization of the natural numbers is..."
    },
    {
        chronofloId: 73418,
        title: "Edmund Husserl",
        startDate: "1859-01-01 00:00:00",
        endDate: "1938-01-01 00:00:00",
        sourceText: "Edmund Gustav Albrecht Husserl was a German philosopher and mathematician who established the school of phenomenology."
    },
    {
        chronofloId: 73421,
        title: "Henri Bergson",
        startDate: "1859-01-01 00:00:00",
        endDate: "1941-01-01 00:00:00",
        sourceText: "Henri-Louis Bergson was a French philosopher who was influential in the tradition of analytic philosophy and continental philosophy, especially during the first half of the 20th century until the Second World War, but also after 1966 when Gilles Deleuze..."
    },
    {
        chronofloId: 73422,
        title: "John Dewey",
        startDate: "1859-01-01 00:00:00",
        endDate: "1952-01-01 00:00:00",
        sourceText: "John Dewey was an American philosopher, psychologist, and educational reformer whose ideas have been influential in education and social reform. He was one of the most prominent American scholars in the first half of the twentieth century."
    },
    {
        chronofloId: 73417,
        title: "Samuel Alexander",
        startDate: "1859-01-01 00:00:00",
        endDate: "1938-01-01 00:00:00",
        sourceText: "Samuel Alexander was an Australian-born British philosopher. He was the first Jewish fellow of an Oxbridge college."
    },
    {
        chronofloId: 73424,
        title: "Jane Addams",
        startDate: "1860-01-01 00:00:00",
        endDate: "1935-01-01 00:00:00",
        sourceText: "Laura Jane Addams was an American settlement activist, reformer, social worker, sociologist, public administrator and author. She was an important leader in the history of social work and women's suffrage in the United States and advocated for world..."
    },
    {
        chronofloId: 73426,
        title: "Alfred North Whitehead",
        startDate: "1861-01-01 00:00:00",
        endDate: "1947-01-01 00:00:00",
        sourceText: "Alfred North Whitehead was an English mathematician and philosopher. He is best known as the defining figure of the philosophical school known as process philosophy, which today has found application to a wide variety of disciplines, including ecology,..."
    },
    {
        chronofloId: 73427,
        title: "Karl Groos",
        startDate: "1861-01-01 00:00:00",
        endDate: "1946-01-01 00:00:00",
        sourceText: "Karl Groos was a philosopher and psychologist who proposed an evolutionary instrumentalist theory of play. His 1898 book on The Play of Animals suggested that play is a preparation for later life."
    },
    {
        chronofloId: 73423,
        title: "Pierre Duhem",
        startDate: "1861-01-01 00:00:00",
        endDate: "1916-01-01 00:00:00",
        sourceText: "Pierre Maurice Marie Duhem was a French theoretical physicist who worked on thermodynamics, hydrodynamics, and the theory of elasticity. Duhem was also a historian of science, noted for his work on the European Middle Ages, which is regarded as having..."
    },
    {
        chronofloId: 73428,
        title: "Rudolf Steiner",
        startDate: "1861-01-01 00:00:00",
        endDate: "1925-01-01 00:00:00",
        sourceText: "Rudolf Joseph Lorenz Steiner was an Austrian occultist philosopher, social reformer, architect, esotericist, and claimed clairvoyant. Steiner gained initial recognition at the end of the nineteenth century as a literary critic and published philosophical..."
    },
    {
        chronofloId: 73425,
        title: "George Herbert Mead",
        startDate: "1863-01-01 00:00:00",
        endDate: "1931-01-01 00:00:00",
        sourceText: "George Herbert Mead was an American philosopher, sociologist, and psychologist, primarily affiliated with the University of Chicago, where he was one of several distinguished pragmatists. He is regarded as one of the founders of symbolic interactionism..."
    },
    {
        chronofloId: 73429,
        title: "George Santayana",
        startDate: "1863-01-01 00:00:00",
        endDate: "1952-01-01 00:00:00",
        sourceText: "Jorge Agustín Nicolás Ruiz de Santayana y Borrás, known in English as George Santayana, was a philosopher, essayist, poet, and novelist. Originally from Spain, Santayana was raised and educated in the US from the age of eight and identified himself as an..."
    },
    {
        chronofloId: 73430,
        title: "Max Weber",
        startDate: "1864-01-01 00:00:00",
        endDate: "1920-01-01 00:00:00",
        sourceText: "Maximilian Karl Emil Weber was a German sociologist, historian, jurist, and political economist regarded as among the most important theorists of the development of modern Western society. His ideas profoundly influence social theory and research. Despite..."
    },
    {
        chronofloId: 73433,
        title: "Miguel de Unamuno",
        startDate: "1864-01-01 00:00:00",
        endDate: "1936-01-01 00:00:00",
        sourceText: "Miguel de Unamuno y Jugo was a Spanish essayist, novelist, poet, playwright, philosopher, professor of Greek and Classics, and later rector at the University of Salamanca."
    },
    {
        chronofloId: 73432,
        title: "Benedetto Croce",
        startDate: "1866-01-01 00:00:00",
        endDate: "1952-01-01 00:00:00",
        sourceText: "Benedetto Croce was an Italian idealist philosopher, historian and politician, who wrote on numerous topics, including philosophy, history, historiography and aesthetics."
    },
    {
        chronofloId: 73431,
        title: "J. M. E. McTaggart",
        startDate: "1866-01-01 00:00:00",
        endDate: "1925-01-01 00:00:00",
        sourceText: "John McTaggart Ellis McTaggart (1866–1925) was an English idealist metaphysician. For most of his life McTaggart was a fellow and lecturer in philosophy at Trinity College, Cambridge. He was an exponent of the philosophy of Georg Wilhelm Friedrich Hegel..."
    },
    {
        chronofloId: 73434,
        title: "Emma Goldman",
        startDate: "1869-01-01 00:00:00",
        endDate: "1940-01-01 00:00:00",
        sourceText: "Emma Goldman was an anarchist political activist and writer. She played a pivotal role in the development of anarchist political philosophy in North America and Europe in the first half of the 20th century."
    },
    {
        chronofloId: 73435,
        title: "Rosa Luxemburg",
        startDate: "1870-01-01 00:00:00",
        endDate: "1919-01-01 00:00:00",
        sourceText: "Rosa Luxemburg was a Polish and naturalised German revolutionary socialist, Marxist philosopher and anti-war activist. Successively, she was a member of the Proletariat party, the Social Democracy of the Kingdom of Poland and Lithuania (SDKPiL), the..."
    },
    {
        chronofloId: 73436,
        title: "Harold Prichard",
        startDate: "1871-01-01 00:00:00",
        endDate: "1947-01-01 00:00:00",
        sourceText: "Harold Arthur Prichard was an English philosopher. He was born in London in 1871, the eldest child of Walter Stennett Prichard and his wife Lucy. Harold Prichard was a scholar of Clifton College from where he won a scholarship to New College, Oxford, to..."
    },
    {
        chronofloId: 73438,
        title: "Bertrand Russell",
        startDate: "1872-01-01 00:00:00",
        endDate: "1970-01-01 00:00:00",
        sourceText: "Bertrand Arthur William Russell, 3rd Earl Russell was a British polymath. As an academic, he worked in philosophy, mathematics, and logic. His work has had a considerable influence on mathematics, logic, set theory, linguistics, artificial intelligence,..."
    },
    {
        chronofloId: 73437,
        title: "A.O. Lovejoy",
        startDate: "1873-01-01 00:00:00",
        endDate: "1962-01-01 00:00:00",
        sourceText: "Arthur Oncken Lovejoy was an American philosopher and intellectual historian, who founded the discipline known as the history of ideas with his book The Great Chain of Being (1936), on the topic of that name, which is regarded as 'probably the single most..."
    },
    {
        chronofloId: 73439,
        title: "G. E. Moore",
        startDate: "1873-01-01 00:00:00",
        endDate: "1958-01-01 00:00:00",
        sourceText: "George Edward Moore was an English philosopher, who with Bertrand Russell, Ludwig Wittgenstein and earlier Gottlob Frege was among the founders of analytic philosophy. He and Russell led the turn from idealism in British philosophy and became known for..."
    },
    {
        chronofloId: 73442,
        title: "Ernst Cassirer",
        startDate: "1874-01-01 00:00:00",
        endDate: "1945-01-01 00:00:00",
        sourceText: "Ernst Alfred Cassirer was a German philosopher. Trained within the Neo-Kantian Marburg School, he initially followed his mentor Hermann Cohen in attempting to supply an idealistic philosophy of science."
    },
    {
        chronofloId: 73441,
        title: "Max Scheler",
        startDate: "1874-01-01 00:00:00",
        endDate: "1928-01-01 00:00:00",
        sourceText: "Max Ferdinand Scheler was a German philosopher known for his work in phenomenology, ethics, and philosophical anthropology. Considered in his lifetime one of the most prominent German philosophers, Scheler developed the philosophical method of Edmund..."
    },
    {
        chronofloId: 73440,
        title: "Nikolai Berdyaev",
        startDate: "1874-01-01 00:00:00",
        endDate: "1948-01-01 00:00:00",
        sourceText: "Nikolai Alexandrovich Berdyaev was a Russian philosopher, theologian, and Christian existentialist who emphasized the existential spiritual significance of human freedom and the human person. Alternative historical spellings of his surname in English..."
    },
    {
        chronofloId: 73443,
        title: "Giovanni Gentile",
        startDate: "1875-01-01 00:00:00",
        endDate: "1944-01-01 00:00:00",
        sourceText: "Giovanni Gentile was an Italian neo-Hegelian idealist philosopher, educator, and fascist politician. The self-styled \"philosopher of Fascism\", he was influential in providing an intellectual foundation for Italian Fascism, and ghostwrote part of The..."
    },
    {
        chronofloId: 73444,
        title: "Ralph Barton Perry",
        startDate: "1876-01-01 00:00:00",
        endDate: "1957-01-01 00:00:00",
        sourceText: "Ralph Barton Perry was an American philosopher. He was a strident moral idealist who stated in 1909 that, to him, idealism meant \"to interpret life consistently with ethical, scientific, and metaphysical truth.\" (citation?) Perry's viewpoints on religion..."
    },
    {
        chronofloId: 73445,
        title: "William Ross",
        startDate: "1877-01-01 00:00:00",
        endDate: "1971-01-01 00:00:00",
        sourceText: "Sir William David Ross, known as David Ross but usually cited as W. D. Ross, was a Scottish philosopher who is known for his work in ethics. His best-known work is The Right and the Good (1930), and he is perhaps best known for developing a pluralist,..."
    },
    {
        chronofloId: 73446,
        title: "Martin Buber",
        startDate: "1878-01-01 00:00:00",
        endDate: "1965-01-01 00:00:00",
        sourceText: "Martin Buber was an Austrian Jewish and Israeli philosopher best known for his philosophy of dialogue, a form of existentialism centered on the distinction between the I–Thou relationship and the I–It relationship. Born in Vienna, Buber came from a family..."
    },
    {
        chronofloId: 73449,
        title: "Hans Kelsen",
        startDate: "1881-01-01 00:00:00",
        endDate: "1973-01-01 00:00:00",
        sourceText: "Hans Kelsen was an Austrian jurist, legal philosopher and political philosopher. He was the author of the 1920 Austrian Constitution, which to a very large degree is still valid today. Due to the rise of totalitarianism in Austria, Kelsen left for Germany..."
    },
    {
        chronofloId: 73447,
        title: "Ludwig von Mises",
        startDate: "1881-01-01 00:00:00",
        endDate: "1973-01-01 00:00:00",
        sourceText: "Ludwig Heinrich Edler von Mises was an Austrian School economist, historian, logician, and sociologist. Mises wrote and lectured extensively on the societal contributions of classical liberalism. He is best known for his work on praxeology studies..."
    },
    {
        chronofloId: 73448,
        title: "Pierre Teilhard de Chardin",
        startDate: "1881-01-01 00:00:00",
        endDate: "1955-01-01 00:00:00",
        sourceText: "Pierre Teilhard de Chardin was a French Jesuit priest, scientist, paleontologist, theologian, philosopher and teacher. He was Darwinian in outlook and the author of several influential theological and philosophical books."
    },
    {
        chronofloId: 73453,
        title: "Jacques Maritain",
        startDate: "1882-01-01 00:00:00",
        endDate: "1973-01-01 00:00:00",
        sourceText: "Jacques Maritain was a French Catholic philosopher. Raised Protestant, he was agnostic before converting to Catholicism in 1906. An author of more than 60 books, he helped to revive Thomas Aquinas for modern times, and was influential in the development..."
    },
    {
        chronofloId: 73450,
        title: "Moritz Schlick",
        startDate: "1882-01-01 00:00:00",
        endDate: "1936-01-01 00:00:00",
        sourceText: "Friedrich Albert Moritz Schlick was a German philosopher, physicist, and the founding father of logical positivism and the Vienna Circle."
    },
    {
        chronofloId: 73452,
        title: "Nicolai Hartmann",
        startDate: "1882-01-01 00:00:00",
        endDate: "1950-01-01 00:00:00",
        sourceText: "Paul Nicolai Hartmann was a Baltic German philosopher. He is regarded as a key representative of critical realism and as one of the most important twentieth-century metaphysicians."
    },
    {
        chronofloId: 73451,
        title: "Otto Neurath",
        startDate: "1882-01-01 00:00:00",
        endDate: "1945-01-01 00:00:00",
        sourceText: "Otto Karl Wilhelm Neurath was an Austrian-born philosopher of science, sociologist, and political economist. He was also the inventor of the ISOTYPE method of pictorial statistics and an innovator in museum practice. Before he fled his native country in..."
    },
    {
        chronofloId: 73458,
        title: "Clarence Lewis",
        startDate: "1883-01-01 00:00:00",
        endDate: "1964-01-01 00:00:00",
        sourceText: "Clarence Irving Lewis, usually cited as C. I. Lewis, was an American academic philosopher and the founder of conceptual pragmatism. First a noted logician, he later branched into epistemology, and during the last 20 years of his life, he wrote much on..."
    },
    {
        chronofloId: 73454,
        title: "José Ortega y Gasset",
        startDate: "1883-01-01 00:00:00",
        endDate: "1955-01-01 00:00:00",
        sourceText: "José Ortega y Gasset was a Spanish philosopher and essayist. He worked during the first half of the 20th century, while Spain oscillated between monarchy, republicanism, and dictatorship. His philosophy has been characterized as a \"philosophy of life\"..."
    },
    {
        chronofloId: 73457,
        title: "Karl Jaspers",
        startDate: "1883-01-01 00:00:00",
        endDate: "1969-01-01 00:00:00",
        sourceText: "Karl Theodor Jaspers was a German-Swiss psychiatrist and philosopher who had a strong influence on modern theology, psychiatry, and philosophy. After being trained in and practicing psychiatry, Jaspers turned to philosophical inquiry and attempted to..."
    },
    {
        chronofloId: 73456,
        title: "Gaston Bachelard",
        startDate: "1884-01-01 00:00:00",
        endDate: "1962-01-01 00:00:00",
        sourceText: "Gaston Bachelard was a French philosopher. He made contributions in the fields of poetics and the philosophy of science. To the latter, he introduced the concepts of epistemological obstacle and epistemological break. He influenced many subsequent French..."
    },
    {
        chronofloId: 73455,
        title: "György Lukács",
        startDate: "1885-01-01 00:00:00",
        endDate: "1971-01-01 00:00:00",
        sourceText: "György Lukács was a Hungarian Marxist philosopher, literary historian, critic, and aesthetician. He was one of the founders of Western Marxism, an interpretive tradition that departed from the Marxist ideological orthodoxy of the Soviet Union. He..."
    },
    {
        chronofloId: 73459,
        title: "Franz Rosenzweig",
        startDate: "1886-01-01 00:00:00",
        endDate: "1929-01-01 00:00:00",
        sourceText: "Franz Rosenzweig was a German theologian, philosopher, and translator."
    },
    {
        chronofloId: 73462,
        title: "Karl Barth",
        startDate: "1886-01-01 00:00:00",
        endDate: "1968-01-01 00:00:00",
        sourceText: "Karl Barth was a Swiss Calvinist theologian. Barth is well-known in theology for his landmark commentary The Epistle to the Romans (1921), his involvement in the Confessing Church, including his authorship of the Barmen Declaration, and especially his..."
    },
    {
        chronofloId: 73460,
        title: "Walter Terence Stace",
        startDate: "1886-01-01 00:00:00",
        endDate: "1967-01-01 00:00:00",
        sourceText: "Walter Terence Stace was a British civil servant, educator, public philosopher and epistemologist, who wrote on Hegel, mysticism, and moral relativism. He worked with the Ceylon Civil Service from 1910 to 1932, and from 1932 to 1955 he was employed by..."
    },
    {
        chronofloId: 73461,
        title: "C. D. Broad",
        startDate: "1887-01-01 00:00:00",
        endDate: "1971-01-01 00:00:00",
        sourceText: "Charlie Dunbar Broad, usually cited as C. D. Broad, was an English epistemologist, historian of philosophy, philosopher of science, moral philosopher, and writer on the philosophical aspects of psychical research. He was known for his thorough and..."
    },
    {
        chronofloId: 73464,
        title: "Gabriel Marcel",
        startDate: "1889-01-01 00:00:00",
        endDate: "1973-01-01 00:00:00",
        sourceText: "Gabriel Honoré Marcel was a French philosopher, playwright, music critic and leading Christian existentialist. The author of over a dozen books and at least thirty plays, Marcel's work focused on the modern individual's struggle in a technologically..."
    },
    {
        chronofloId: 73465,
        title: "Ludwig Wittgenstein",
        startDate: "1889-01-01 00:00:00",
        endDate: "1951-01-01 00:00:00",
        sourceText: "Ludwig Josef Johann Wittgenstein was an Austrian-British philosopher who worked primarily in logic, the philosophy of mathematics, the philosophy of mind, and the philosophy of language. He is considered to be one of the most important and influential..."
    },
    {
        chronofloId: 73463,
        title: "Martin Heidegger",
        startDate: "1889-01-01 00:00:00",
        endDate: "1976-01-01 00:00:00",
        sourceText: "Martin Heidegger was a German philosopher who is best known for contributions to phenomenology, hermeneutics, and existentialism."
    },
    {
        chronofloId: 73466,
        title: "Antonio Gramsci",
        startDate: "1891-01-01 00:00:00",
        endDate: "1937-01-01 00:00:00",
        sourceText: "Antonio Francesco Gramsci was an Italian Marxist philosopher, journalist, linguist, writer, and politician. He wrote on philosophy, political theory, sociology, history, and linguistics. He was a founding member and one-time leader of the Communist Party..."
    },
    {
        chronofloId: 73468,
        title: "Rudolf Carnap",
        startDate: "1891-01-01 00:00:00",
        endDate: "1970-01-01 00:00:00",
        sourceText: "Rudolf Carnap was a German-language philosopher who was active in Europe before 1935 and in the United States thereafter. He was a major member of the Vienna Circle and an advocate of logical positivism. He is considered \"one of the giants among..."
    },
    {
        chronofloId: 73469,
        title: "Brand Blanshard",
        startDate: "1892-01-01 00:00:00",
        endDate: "1987-01-01 00:00:00",
        sourceText: "Percy Brand Blanshard was an American philosopher known primarily for his defense of reason and rationalism. A powerful polemicist, by all accounts he comported himself with courtesy and grace in philosophical controversies and exemplified the \"rational..."
    },
    {
        chronofloId: 73467,
        title: "Walter Benjamin",
        startDate: "1892-01-01 00:00:00",
        endDate: "1940-01-01 00:00:00",
        sourceText: "Walter Bendix Schönflies Benjamin was a German Jewish philosopher, cultural critic and essayist. An eclectic thinker, combining elements of German idealism, Romanticism, Western Marxism, and Jewish mysticism, Benjamin made enduring and influential..."
    },
    {
        chronofloId: 73470,
        title: "F. S. C. Northrop",
        startDate: "1893-01-01 00:00:00",
        endDate: "1992-01-01 00:00:00",
        sourceText: "Filmer Stuart Cuckow Northrop was an American philosopher. After receiving a B.A. from Beloit College in 1915, and an MA from Yale University in 1919, he went on to Harvard University where he earned another MA in 1922 and a Ph.D. in 1924. Northrop was an..."
    },
    {
        chronofloId: 73474,
        title: "Roman Ingarden",
        startDate: "1893-01-01 00:00:00",
        endDate: "1970-01-01 00:00:00",
        sourceText: "Roman Witold Ingarden was a Polish philosopher who worked in aesthetics, ontology, and phenomenology."
    },
    {
        chronofloId: 73473,
        title: "Susanne Langer",
        startDate: "1895-01-01 00:00:00",
        endDate: "1985-01-01 00:00:00",
        sourceText: "Susanne Katherina Langer was an American philosopher, writer, and educator and was well known for her theories on the influences of art on the mind. She was one of the first women in American history to achieve an academic career in philosophy and the..."
    },
    {
        chronofloId: 73471,
        title: "Friedrich Waismann",
        startDate: "1896-01-01 00:00:00",
        endDate: "1959-01-01 00:00:00",
        sourceText: "Friedrich Waismann was an Austrian mathematician, physicist, and philosopher. He is best known for being a member of the Vienna Circle and one of the key theorists in logical positivism."
    },
    {
        chronofloId: 73472,
        title: "Georges Bataille",
        startDate: "1897-01-01 00:00:00",
        endDate: "1962-01-01 00:00:00",
        sourceText: "Georges Albert Maurice Victor Bataille was a French philosopher and intellectual working in philosophy, literature, sociology, anthropology, consumerism, and history of art. His writing, which included essays, novels, and poetry, explored such subjects as..."
    },
    {
        chronofloId: 73477,
        title: "Herbert Marcuse",
        startDate: "1898-01-01 00:00:00",
        endDate: "1979-01-01 00:00:00",
        sourceText: "Herbert Marcuse was a German-American philosopher, sociologist, and political theorist, associated with the Frankfurt School of critical theory. Born in Berlin, Marcuse studied at the Humboldt University of Berlin and then at Freiburg, where he received..."
    },
    {
        chronofloId: 73475,
        title: "Xavier Zubiri",
        startDate: "1898-01-01 00:00:00",
        endDate: "1983-01-01 00:00:00",
        sourceText: "Xavier Zubiri was a Spanish philosopher. He was a member of the Madrid School, composed of philosophers José Ortega y Gasset (the founder of the group), José Gaos, and Julián Marías, among others."
    },
    {
        chronofloId: 73476,
        title: "Henry Price",
        startDate: "1899-01-01 00:00:00",
        endDate: "1984-01-01 00:00:00",
        sourceText: "Henry Habberley Price, usually cited as H. H. Price, was a Welsh philosopher, known for his work on the philosophy of perception. He also wrote on parapsychology."
    },
    {
        chronofloId: 73478,
        title: "Leo Strauss",
        startDate: "1899-01-01 00:00:00",
        endDate: "1973-01-01 00:00:00",
        sourceText: "Leo Strauss was a German-American political philosopher and classicist who specialized in classical political philosophy. Born in Germany to Jewish parents, Strauss later emigrated from Germany to the United States. He spent much of his career as a..."
    },
    {
        chronofloId: 73479,
        title: "Gilbert Ryle",
        startDate: "1900-01-01 00:00:00",
        endDate: "1976-01-01 00:00:00",
        sourceText: "Gilbert Ryle (1900–1976) was a British philosopher, principally known for his critique of Cartesian dualism, for which he coined the phrase \"ghost in the machine.\" He was a representative of the generation of British ordinary language philosophers who..."
    },
    {
        chronofloId: 73480,
        title: "Hans-Georg Gadamer",
        startDate: "1900-01-01 00:00:00",
        endDate: "2002-01-01 00:00:00",
        sourceText: "Hans-Georg Gadamer was a German philosopher of the continental tradition, best known for his 1960 magnum opus, Truth and Method, on hermeneutics."
    },
    {
        chronofloId: 73484,
        title: "Alfred Tarski",
        startDate: "1901-01-01 00:00:00",
        endDate: "1983-01-01 00:00:00",
        sourceText: "Alfred Tarski was a Polish-American logician and mathematician. A prolific author best known for his work on model theory, metamathematics, and algebraic logic, he also contributed to abstract algebra, topology, geometry, measure theory, mathematical..."
    },
    {
        chronofloId: 73482,
        title: "E. Nagel",
        startDate: "1901-01-01 00:00:00",
        endDate: "1985-01-01 00:00:00",
        sourceText: "Ernest Nagel was an American philosopher of science. Along with Rudolf Carnap, Hans Reichenbach, and Carl Hempel, he is sometimes seen as one of the major figures of the logical positivist movement. His 1961 book The Structure of Science is considered a..."
    },
    {
        chronofloId: 73481,
        title: "Jacques Lacan",
        startDate: "1901-01-01 00:00:00",
        endDate: "1981-01-01 00:00:00",
        sourceText: "Jacques Marie Émile Lacan was a French psychoanalyst and psychiatrist who has been called \"the most controversial psycho-analyst since Freud\". Giving yearly seminars in Paris from 1953 to 1981, Lacan’s work has marked the French and international..."
    },
    {
        chronofloId: 73485,
        title: "Karl Popper",
        startDate: "1902-01-01 00:00:00",
        endDate: "1994-01-01 00:00:00",
        sourceText: "Sir Karl Raimund Popper was an Austrian-British philosopher, academic and social commentator. One of the 20th century's most influential philosophers of science, Popper is known for his rejection of the classical inductivist views on the scientific method..."
    },
    {
        chronofloId: 73483,
        title: "Mortimer Adler",
        startDate: "1902-01-01 00:00:00",
        endDate: "2001-01-01 00:00:00",
        sourceText: "Mortimer Jerome Adler was an American philosopher, educator, encyclopedist, and popular author. As a philosopher he worked within the Aristotelian and Thomistic traditions. He lived for long stretches in New York City, Chicago, San Francisco, and San..."
    },
    {
        chronofloId: 73489,
        title: "Ernest Addison Moody",
        startDate: "1903-01-01 00:00:00",
        endDate: "1975-01-01 00:00:00",
        sourceText: "Ernest Addison Moody (1903–1975) was a noted philosopher, medievalist, and logician as well as a musician and scientist. He served as professor of philosophy at University of California, Los Angeles (UCLA), where he also served as department chair, and..."
    },
    {
        chronofloId: 73488,
        title: "Frank P. Ramsey",
        startDate: "1903-01-01 00:00:00",
        endDate: "1930-01-01 00:00:00",
        sourceText: "Frank Plumpton Ramsey was a British philosopher, mathematician, and economist who made major contributions to all three fields before his death at the age of 26. He was a close friend of Ludwig Wittgenstein and, as an undergraduate, translated..."
    },
    {
        chronofloId: 73486,
        title: "Theodor Adorno",
        startDate: "1903-01-01 00:00:00",
        endDate: "1969-01-01 00:00:00",
        sourceText: "Theodor W. Adorno was a German philosopher, sociologist, psychologist, musicologist, and composer known for his critical theory of society."
    },
    {
        chronofloId: 73491,
        title: "Ayn Rand",
        startDate: "1905-01-01 00:00:00",
        endDate: "1982-01-01 00:00:00",
        sourceText: "Alice O'Connor, better known by her pen name Ayn Rand, was a Russian-born American writer and philosopher. She is known for her fiction and for developing a philosophical system she named Objectivism. Born and educated in Russia, she moved to the United..."
    },
    {
        chronofloId: 73490,
        title: "Eugen Fink",
        startDate: "1905-01-01 00:00:00",
        endDate: "1975-01-01 00:00:00",
        sourceText: "Eugen Fink was a German philosopher. He was a representative of phenomenological idealism and later a follower of Martin Heidegger. He approached the problem of Being as a manifestation of the cosmic movement with Man being a participant in this movement...."
    },
    {
        chronofloId: 73487,
        title: "Jean-Paul Sartre",
        startDate: "1905-01-01 00:00:00",
        endDate: "1980-01-01 00:00:00",
        sourceText: "Jean-Paul Charles Aymard Sartre was one of the key figures in the philosophy of Existentialism, a French playwright, novelist, screenwriter, political activist, biographer, and literary critic, as well as a leading figure in 20th-century French philosophy..."
    },
    {
        chronofloId: 73493,
        title: "Takiyettin Mengüşoğlu",
        startDate: "1905-01-01 00:00:00",
        endDate: "1984-01-01 00:00:00",
        sourceText: "Takiyettin Mengusoglu was a Turkish philosopher. He founded a new school of anthropology, which he called ontological anthropology. This anthropology deals with man not through any conceptualization but through \"his concrete biopsychic wholeness\"."
    },
    {
        chronofloId: 73492,
        title: "Emmanuel Levinas",
        startDate: "1906-01-01 00:00:00",
        endDate: "1995-01-01 00:00:00",
        sourceText: "Emmanuel Levinas was a French philosopher of Lithuanian Jewish ancestry who is known for his work within Jewish philosophy, existentialism, and phenomenology, focusing on the relationship of ethics to metaphysics and ontology."
    },
    {
        chronofloId: 73495,
        title: "Hannah Arendt",
        startDate: "1906-01-01 00:00:00",
        endDate: "1975-01-01 00:00:00",
        sourceText: "Hannah Arendt was a political philosopher, author, and Holocaust survivor. Her contributions influenced 20th and 21st century political theorists."
    },
    {
        chronofloId: 73494,
        title: "Kurt Gödel",
        startDate: "1906-01-01 00:00:00",
        endDate: "1978-01-01 00:00:00",
        sourceText: "Kurt Friedrich Gödel was a logician, mathematician, and philosopher. Considered along with Aristotle and Gottlob Frege to be one of the most significant logicians in history, Gödel had an immense effect upon scientific and philosophical thinking in the..."
    },
    {
        chronofloId: 73497,
        title: "Herbert Hart",
        startDate: "1907-01-01 00:00:00",
        endDate: "1992-01-01 00:00:00",
        sourceText: "Herbert Lionel Adolphus Hart, usually cited as H. L. A. Hart, was an English legal philosopher, and a major figure in political and legal philosophy. He was Professor of Jurisprudence at Oxford University and the Principal of Brasenose College, Oxford...."
    },
    {
        chronofloId: 73500,
        title: "Charles Stevenson",
        startDate: "1908-01-01 00:00:00",
        endDate: "1979-01-01 00:00:00",
        sourceText: "Charles Leslie Stevenson was an American analytic philosopher best known for his work in ethics and aesthetics."
    },
    {
        chronofloId: 73499,
        title: "Maurice Merleau-Ponty",
        startDate: "1908-01-01 00:00:00",
        endDate: "1961-01-01 00:00:00",
        sourceText: "Maurice Jean Jacques Merleau-Ponty was a French phenomenological philosopher, strongly influenced by Edmund Husserl and Martin Heidegger. The constitution of meaning in human experience was his main interest and he wrote on perception, art, politics,..."
    },
    {
        chronofloId: 73498,
        title: "Simone de Beauvoir",
        startDate: "1908-01-01 00:00:00",
        endDate: "1986-01-01 00:00:00",
        sourceText: "Simone Lucie Ernestine Marie Bertrand de Beauvoir was a French existencialist philosopher, writer, social theorist and feminist activist. Though she did not consider herself a philosopher, and even though she was not considered one at the time of her..."
    },
    {
        chronofloId: 73496,
        title: "Willard van Orman Quine",
        startDate: "1908-01-01 00:00:00",
        endDate: "2000-01-01 00:00:00",
        sourceText: "Willard Van Orman Quine was an American philosopher and logician in the analytic tradition, recognized as \"one of the most influential philosophers of the twentieth century\". From 1930 until his death 70 years later, Quine was continually affiliated with..."
    },
    {
        chronofloId: 73501,
        title: "Simone Weil",
        startDate: "1909-01-01 00:00:00",
        endDate: "1943-01-01 00:00:00",
        sourceText: "Simone Adolphine Weil was a French philosopher, mystic, and political activist. Between 1995 and 2012 over 2,500 scholarly works were published about her. Albert Camus described her as \"the only great spirit of our times\"."
    },
    {
        chronofloId: 73502,
        title: "Alfred Ayer",
        startDate: "1910-01-01 00:00:00",
        endDate: "1989-01-01 00:00:00",
        sourceText: "Sir Alfred Jules \"Freddie\" Ayer, usually cited as A. J. Ayer, was an English philosopher known for his promotion of logical positivism, particularly in his books Language, Truth, and Logic (1936) and The Problem of Knowledge (1956)."
    },
    {
        chronofloId: 73504,
        title: "John Austin",
        startDate: "1911-01-01 00:00:00",
        endDate: "1960-01-01 00:00:00",
        sourceText: "John Langshaw Austin was a British philosopher of language and leading proponent of ordinary language philosophy, perhaps best known for developing the theory of speech acts."
    },
    {
        chronofloId: 73503,
        title: "Marshall McLuhan",
        startDate: "1911-01-01 00:00:00",
        endDate: "1980-01-01 00:00:00",
        sourceText: "Herbert Marshall McLuhan was a Canadian philosopher whose work is among the cornerstones of the study of media theory. Born in Edmonton, Alberta, and raised in Winnipeg, Manitoba, McLuhan studied at the University of Manitoba and the University of..."
    },
    {
        chronofloId: 73505,
        title: "Alan Turing",
        startDate: "1912-01-01 00:00:00",
        endDate: "1954-01-01 00:00:00",
        sourceText: "Alan Mathison Turing was an English mathematician, computer scientist, logician, cryptanalyst, philosopher, and theoretical biologist. Turing was highly influential in the development of theoretical computer science, providing a formalisation of the..."
    },
    {
        chronofloId: 73506,
        title: "Wilfrid Sellars",
        startDate: "1912-01-01 00:00:00",
        endDate: "1989-01-01 00:00:00",
        sourceText: "Wilfrid Stalker Sellars was an American philosopher and prominent developer of critical realism, who \"revolutionized both the content and the method of philosophy in the United States\"."
    },
    {
        chronofloId: 73509,
        title: "Albert Camus",
        startDate: "1913-01-01 00:00:00",
        endDate: "1960-01-01 00:00:00",
        sourceText: "Albert Camus was a French philosopher, author, and journalist. He was awarded the 1957 Nobel Prize in Literature at the age of 44, the second-youngest recipient in history. His works include The Stranger, The Plague, The Myth of Sisyphus, The Fall, and..."
    },
    {
        chronofloId: 73507,
        title: "Paul Ricœur",
        startDate: "1913-01-01 00:00:00",
        endDate: "2005-01-01 00:00:00",
        sourceText: "Jean Paul Gustave Ricœur was a French philosopher best known for combining phenomenological description with hermeneutics. As such, his thought is within the same tradition as other major hermeneutic phenomenologists, Martin Heidegger, Hans-Georg Gadamer,..."
    },
    {
        chronofloId: 73508,
        title: "Roland Barthes",
        startDate: "1915-01-01 00:00:00",
        endDate: "1980-01-01 00:00:00",
        sourceText: "Roland Gérard Barthes was a French literary theorist, essayist, philosopher, critic, and semiotician. His work engaged in the analysis of a variety of sign systems, mainly derived from Western popular culture. His ideas explored a diverse range of fields..."
    },
    {
        chronofloId: 73511,
        title: "Donald Davidson",
        startDate: "1917-01-01 00:00:00",
        endDate: "2003-01-01 00:00:00",
        sourceText: "Donald Herbert Davidson was an American philosopher. He served as Slusser Professor of Philosophy at the University of California, Berkeley, from 1981 to 2003 after having also held teaching appointments at Stanford University, Rockefeller University,..."
    },
    {
        chronofloId: 73510,
        title: "J. L. Mackie",
        startDate: "1917-01-01 00:00:00",
        endDate: "1981-01-01 00:00:00",
        sourceText: "John Leslie Mackie was an Australian philosopher. He made significant contributions to the philosophy of religion, metaphysics, and the philosophy of language, and is perhaps best known for his views on metaethics, especially his defence of moral..."
    },
    {
        chronofloId: 73512,
        title: "Louis Althusser",
        startDate: "1918-01-01 00:00:00",
        endDate: "1990-01-01 00:00:00",
        sourceText: "Louis Pierre Althusser was a French Marxist philosopher. He was born in Algeria and studied at the École normale supérieure in Paris, where he eventually became Professor of Philosophy."
    },
    {
        chronofloId: 73514,
        title: "M. Bunge",
        startDate: "1919-01-01 00:00:00",
        endDate: "2020-01-01 00:00:00",
        sourceText: "Mario Augusto Bunge was an Argentine-Canadian philosopher and physicist. His philosophical writings combined scientific realism, systemism, materialism, emergentism, and other principles."
    },
    {
        chronofloId: 73518,
        title: "P. F. Strawson",
        startDate: "1919-01-01 00:00:00",
        endDate: "2006-01-01 00:00:00",
        sourceText: "Sir Peter Frederick Strawson was an English philosopher. He was the Waynflete Professor of Metaphysical Philosophy at the University of Oxford from 1968 to 1987. Before that, he was appointed as a college lecturer at University College, Oxford, in 1947,..."
    },
    {
        chronofloId: 73513,
        title: "R. M. Hare",
        startDate: "1919-01-01 00:00:00",
        endDate: "2002-01-01 00:00:00",
        sourceText: "Richard Mervyn Hare, usually cited as R. M. Hare, was a British moral philosopher who held the post of White's Professor of Moral Philosophy at the University of Oxford from 1966 until 1983. He subsequently taught for a number of years at the University..."
    },
    {
        chronofloId: 73515,
        title: "John Rawls",
        startDate: "1921-01-01 00:00:00",
        endDate: "2002-01-01 00:00:00",
        sourceText: "John Bordley Rawls was an American moral and political philosopher in the liberal tradition. Rawls received both the Schock Prize for Logic and Philosophy and the National Humanities Medal in 1999, the latter presented by President Bill Clinton, in..."
    },
    {
        chronofloId: 73516,
        title: "Stephen Toulmin",
        startDate: "1922-01-01 00:00:00",
        endDate: "2009-01-01 00:00:00",
        sourceText: "Stephen Edelston Toulmin was a British philosopher, author, and educator. Influenced by Ludwig Wittgenstein, Toulmin devoted his works to the analysis of moral reasoning. Throughout his writings, he sought to develop practical arguments which can be used..."
    },
    {
        chronofloId: 73519,
        title: "Thomas Kuhn",
        startDate: "1922-01-01 00:00:00",
        endDate: "1996-01-01 00:00:00",
        sourceText: "Thomas Samuel Kuhn was an American philosopher of science whose 1962 book The Structure of Scientific Revolutions was influential in both academic and popular circles, introducing the term paradigm shift, which has since become an English-language idiom."
    },
    {
        chronofloId: 73520,
        title: "Frantz Fanon",
        startDate: "1925-01-01 00:00:00",
        endDate: "1961-01-01 00:00:00",
        sourceText: "Frantz Omar Fanon, also known as Ibrahim Frantz Fanon, was a French West Indian psychiatrist and political philosopher from the French colony of Martinique. His works have become influential in the fields of post-colonial studies, critical theory and..."
    },
    {
        chronofloId: 73522,
        title: "Gilles Deleuze",
        startDate: "1925-01-01 00:00:00",
        endDate: "1995-01-01 00:00:00",
        sourceText: "Gilles Deleuze was a French philosopher who, from the early 1950s until his death in 1995, wrote on philosophy, literature, film, and fine art. His most popular works were the two volumes of Capitalism and Schizophrenia: Anti-Oedipus (1972) and A Thousand..."
    },
    {
        chronofloId: 73517,
        title: "Zygmunt Bauman",
        startDate: "1925-01-01 00:00:00",
        endDate: "2017-01-01 00:00:00",
        sourceText: "Zygmunt Bauman was a Polish sociologist and philosopher. He was driven out of the Polish People's Republic during the 1968 Polish political crisis and forced to give up his Polish citizenship. He emigrated to Israel; three years later he moved to the..."
    },
    {
        chronofloId: 73521,
        title: "David Malet Armstrong",
        startDate: "1926-01-01 00:00:00",
        endDate: "2014-01-01 00:00:00",
        sourceText: "David Malet Armstrong, often D. M. Armstrong, was an Australian philosopher. He is well known for his work on metaphysics and the philosophy of mind, and for his defence of a factualist ontology, a functionalist theory of the mind, an externalist..."
    },
    {
        chronofloId: 73525,
        title: "Eugene Gendlin",
        startDate: "1926-01-01 00:00:00",
        endDate: "2017-01-01 00:00:00",
        sourceText: "Eugene Tovio Gendlin was an American philosopher who developed ways of thinking about and working with living process, the bodily felt sense and the \"philosophy of the implicit\". Though he had no degree in the field of psychology, his advanced study with..."
    },
    {
        chronofloId: 73523,
        title: "Hilary Putnam",
        startDate: "1926-01-01 00:00:00",
        endDate: "2016-01-01 00:00:00",
        sourceText: "Hilary Whitehall Putnam was an American philosopher, mathematician, and computer scientist, and a major figure in analytic philosophy in the second half of the 20th century. He made significant contributions to philosophy of mind, philosophy of language,..."
    },
    {
        chronofloId: 73524,
        title: "Michel Foucault",
        startDate: "1926-01-01 00:00:00",
        endDate: "1984-01-01 00:00:00",
        sourceText: "Paul-Michel Foucault was a French philosopher, historian of ideas, writer, political activist, and literary critic."
    },
    {
        chronofloId: 73527,
        title: "John Howard Yoder",
        startDate: "1927-01-01 00:00:00",
        endDate: "1997-01-01 00:00:00",
        sourceText: "John Howard Yoder (1927–1997) was an American theologian and ethicist best known for his defense of Christian pacifism. His most influential book was The Politics of Jesus, which was first published in 1972. Yoder was a Mennonite and wrote from an..."
    },
    {
        chronofloId: 73528,
        title: "Noam Chomsky",
        startDate: "1928-01-01 00:00:00",
        endDate: "1928-01-01 00:00:00",
        sourceText: "Avram Noam Chomsky is an American linguist, philosopher, cognitive scientist, historian, social critic, and political activist. Sometimes called \"the father of modern linguistics\", Chomsky is also a major figure in analytic philosophy and one of the..."
    },
    {
        chronofloId: 73526,
        title: "Robert M. Pirsig",
        startDate: "1928-01-01 00:00:00",
        endDate: "2017-01-01 00:00:00",
        sourceText: "Robert Maynard Pirsig was an American writer and philosopher. He was the author of the philosophical novels Zen and the Art of Motorcycle Maintenance: An Inquiry into Values (1974), Lila: An Inquiry into Morals (1991) and he co-authored the upcoming On..."
    },
    {
        chronofloId: 73533,
        title: "Alasdair MacIntyre",
        startDate: "1929-01-01 00:00:00",
        endDate: "1929-01-01 00:00:00",
        sourceText: "Alasdair Chalmers MacIntyre is a Scottish-American philosopher who has contributed to moral and political philosophy as well as history of philosophy and theology. MacIntyre's After Virtue (1981) is one of the most important works of Anglophone moral and..."
    },
    {
        chronofloId: 73529,
        title: "Bernard Williams",
        startDate: "1929-01-01 00:00:00",
        endDate: "2003-01-01 00:00:00",
        sourceText: "Sir Bernard Arthur Owen Williams, FBA was an English moral philosopher. His publications include Problems of the Self (1973), Ethics and the Limits of Philosophy (1985), Shame and Necessity (1993), and Truth and Truthfulness (2002). He was knighted in..."
    },
    {
        chronofloId: 73532,
        title: "Jaakko Hintikka",
        startDate: "1929-01-01 00:00:00",
        endDate: "2015-01-01 00:00:00",
        sourceText: "Kaarlo Jaakko Juhani Hintikka was a Finnish philosopher and logician."
    },
    {
        chronofloId: 73530,
        title: "Jean Baudrillard",
        startDate: "1929-01-01 00:00:00",
        endDate: "2007-01-01 00:00:00",
        sourceText: "Jean Baudrillard was a French sociologist, philosopher and cultural theorist. He is best known for his analyses of media, contemporary culture, and technological communication, as well as his formulation of concepts such as simulation and hyperreality. He..."
    },
    {
        chronofloId: 73531,
        title: "Jürgen Habermas",
        startDate: "1929-01-01 00:00:00",
        endDate: "1929-01-01 00:00:00",
        sourceText: "Jürgen Habermas is a German philosopher and sociologist in the tradition of critical theory and pragmatism. His work addresses communicative rationality and the public sphere."
    },
    {
        chronofloId: 73534,
        title: "Allan Bloom",
        startDate: "1930-01-01 00:00:00",
        endDate: "1992-01-01 00:00:00",
        sourceText: "Allan David Bloom was an American philosopher, classicist, and academician. He studied under David Grene, Leo Strauss, Richard McKeon, and Alexandre Kojève. He subsequently taught at Cornell University, the University of Toronto, Tel Aviv University, Yale..."
    },
    {
        chronofloId: 73535,
        title: "Jacques Derrida",
        startDate: "1930-01-01 00:00:00",
        endDate: "2004-01-01 00:00:00",
        sourceText: "Jacques Derrida was an Algerian-born French philosopher best known for developing a form of semiotic analysis known as deconstruction, which he analyzed in numerous texts, and developed in the context of phenomenology. He is one of the major figures..."
    },
    {
        chronofloId: 73537,
        title: "Pierre Bourdieu",
        startDate: "1930-01-01 00:00:00",
        endDate: "2002-01-01 00:00:00",
        sourceText: "Pierre Bourdieu was a French sociologist and public intellectual. Bourdieu's contributions to the sociology of education, the theory of sociology, and sociology of aesthetics have achieved wide influence in several related academic fields. During his..."
    },
    {
        chronofloId: 73538,
        title: "Charles Taylor",
        startDate: "1931-01-01 00:00:00",
        endDate: "1931-01-01 00:00:00",
        sourceText: "Charles Margrave Taylor is a Canadian philosopher from Montreal, Quebec, and professor emeritus at McGill University best known for his contributions to political philosophy, the philosophy of social science, the history of philosophy, and intellectual..."
    },
    {
        chronofloId: 73539,
        title: "Guy Debord",
        startDate: "1931-01-01 00:00:00",
        endDate: "1994-01-01 00:00:00",
        sourceText: "Guy Louis Debord was a French Marxist theorist, philosopher, filmmaker, member of the Letterist International, founder of a Letterist faction, and founding member of the Situationist International. He was also briefly a member of Socialisme ou Barbarie."
    },
    {
        chronofloId: 73540,
        title: "Richard Rorty",
        startDate: "1931-01-01 00:00:00",
        endDate: "2007-01-01 00:00:00",
        sourceText: "Richard McKay Rorty was an American philosopher. Educated at the University of Chicago and Yale University, he had strong interests and training in both the history of philosophy and contemporary analytic philosophy, the latter of which came to constitute..."
    },
    {
        chronofloId: 73541,
        title: "Alvin Plantinga",
        startDate: "1932-01-01 00:00:00",
        endDate: "1932-01-01 00:00:00",
        sourceText: "Alvin Carl Plantinga is an American analytic philosopher who works primarily in the fields of philosophy of religion, epistemology, and logic."
    },
    {
        chronofloId: 73536,
        title: "John Searle",
        startDate: "1932-01-01 00:00:00",
        endDate: "1932-01-01 00:00:00",
        sourceText: "John Rogers Searle is an American philosopher. He was Willis S. and Marion Slusser Professor Emeritus of the Philosophy of Mind and Language and Professor of the Graduate School at the University of California, Berkeley until 2019. Widely noted for his..."
    },
    {
        chronofloId: 73542,
        title: "Jerry Fodor",
        startDate: "1935-01-01 00:00:00",
        endDate: "2017-01-01 00:00:00",
        sourceText: "Jerry Alan Fodor was an American philosopher and the author of many crucial works in the fields of philosophy of mind and cognitive science. His writings in these fields laid the groundwork for the modularity of mind and the language of thought..."
    },
    {
        chronofloId: 73544,
        title: "Ioanna Kuçuradi",
        startDate: "1936-01-01 00:00:00",
        endDate: "1936-01-01 00:00:00",
        sourceText: "Ioanna Kuçuradi is a Turkish philosopher from Istanbul. She is currently the president of Philosophical Society of Turkey and a full-time academic of Maltepe University."
    },
    {
        chronofloId: 73548,
        title: "Alain Badiou",
        startDate: "1937-01-01 00:00:00",
        endDate: "1937-01-01 00:00:00",
        sourceText: "Alain Badiou is a French philosopher, formerly chair of Philosophy at the École normale supérieure (ENS) and founder of the faculty of Philosophy of the Université de Paris VIII with Gilles Deleuze, Michel Foucault and Jean-François Lyotard. Badiou has..."
    },
    {
        chronofloId: 73543,
        title: "Thomas Nagel",
        startDate: "1937-01-01 00:00:00",
        endDate: "1937-01-01 00:00:00",
        sourceText: "Thomas Nagel is an American philosopher. He is University Professor of Philosophy and Law, Emeritus, at New York University, where he taught from 1980 to 2016. His main areas of philosophical interest are legal philosophy, political philosophy, and..."
    },
    {
        chronofloId: 73545,
        title: "Robert Nozick",
        startDate: "1938-01-01 00:00:00",
        endDate: "2002-01-01 00:00:00",
        sourceText: "Robert Nozick was an American philosopher. He held the Joseph Pellegrino University Professorship at Harvard University, and was president of the American Philosophical Association. He is best known for his books Philosophical Explanations (1981), which..."
    },
    {
        chronofloId: 73547,
        title: "Tom Regan",
        startDate: "1938-01-01 00:00:00",
        endDate: "2017-01-01 00:00:00",
        sourceText: "Tom Regan was an American philosopher who specialized in animal rights theory. He was professor emeritus of philosophy at North Carolina State University, where he had taught from 1967 until his retirement in 2001."
    },
    {
        chronofloId: 73550,
        title: "Jean-Luc Nancy",
        startDate: "1940-01-01 00:00:00",
        endDate: "1940-01-01 00:00:00",
        sourceText: "Jean-Luc Nancy was a French philosopher. Nancy's first book, published in 1973, was Le titre de la lettre, a reading of the work of French psychoanalyst Jacques Lacan, written in collaboration with Philippe Lacoue-Labarthe. Nancy is the author of works on..."
    },
    {
        chronofloId: 73549,
        title: "Saul Kripke",
        startDate: "1940-01-01 00:00:00",
        endDate: "1940-01-01 00:00:00",
        sourceText: "Saul Aaron Kripke is an American philosopher and logician in the analytic tradition. He is a Distinguished Professor of Philosophy at the Graduate Center of the City University of New York and emeritus professor at Princeton University. Since the 1960s,..."
    },
    {
        chronofloId: 73546,
        title: "David Lewis",
        startDate: "1941-01-01 00:00:00",
        endDate: "2001-01-01 00:00:00",
        sourceText: "David Kellogg Lewis was an American philosopher who is widely regarded as one of the most important philosophers of the 20th century. Lewis taught briefly at UCLA and then at Princeton University from 1970 until his death. He is closely associated with..."
    },
    {
        chronofloId: 73551,
        title: "Joxe Azurmendi",
        startDate: "1941-01-01 00:00:00",
        endDate: "1941-01-01 00:00:00",
        sourceText: "Joxe Azurmendi Otaegi is a Basque writer, philosopher, essayist and poet. He has published numerous articles and books on ethics, politics, the philosophy of language, technique, Basque literature and philosophy in general."
    },
    {
        chronofloId: 73554,
        title: "Derek Parfit",
        startDate: "1942-01-01 00:00:00",
        endDate: "2017-01-01 00:00:00",
        sourceText: "Derek Antony Parfit was a British philosopher who specialised in personal identity, rationality, and ethics. He is widely considered one of the most important and influential moral philosophers of the late 20th and early 21st centuries."
    },
    {
        chronofloId: 73553,
        title: "Gayatri Chakravorty Spivak",
        startDate: "1942-01-01 00:00:00",
        endDate: "1942-01-01 00:00:00",
        sourceText: "Gayatri Chakravorty Spivak is an Indian scholar, literary theorist, and feminist critic. She is a University Professor at Columbia University and a founding member of the establishment's Institute for Comparative Literature and Society."
    },
    {
        chronofloId: 73552,
        title: "Giorgio Agamben",
        startDate: "1942-01-01 00:00:00",
        endDate: "1942-01-01 00:00:00",
        sourceText: "Giorgio Agamben is an Italian philosopher best known for his work investigating the concepts of the state of exception, form-of-life and homo sacer. The concept of biopolitics informs many of his writings."
    },
    {
        chronofloId: 73555,
        title: "Roger Scruton",
        startDate: "1944-01-01 00:00:00",
        endDate: "2020-01-01 00:00:00",
        sourceText: "Sir Roger Vernon Scruton was an English philosopher and writer who specialised in aesthetics and political philosophy, particularly in the furtherance of traditionalist conservative views."
    },
    {
        chronofloId: 73558,
        title: "Peter Singer",
        startDate: "1946-01-01 00:00:00",
        endDate: "1946-01-01 00:00:00",
        sourceText: "Peter Albert David Singer is an Australian moral philosopher, currently the Ira W. DeCamp Professor of Bioethics at Princeton University. He specialises in applied ethics and approaches ethical issues from a secular, utilitarian perspective. He is known..."
    },
    {
        chronofloId: 73557,
        title: "John Ralston Saul",
        startDate: "1947-01-01 00:00:00",
        endDate: "1947-01-01 00:00:00",
        sourceText: "John Ralston Saul is a Canadian writer, political philosopher, and public intellectual. Saul is most widely known for his writings on the nature of individualism, citizenship and the public good; the failures of manager-led societies; the confusion..."
    },
    {
        chronofloId: 73556,
        title: "Oruç Aruoba",
        startDate: "1948-01-01 00:00:00",
        endDate: "2020-01-01 00:00:00",
        sourceText: "Oruç Aruoba, was a Turkish writer, poet, and philosopher. His research subjects were epistemology, ethics and the philosophers he was influenced by were Kant, Kierkegaard, Nietzsche, Marx, Heidegger and Wittgenstein."
    },
    {
        chronofloId: 73560,
        title: "Hans-Hermann Hoppe",
        startDate: "1949-01-01 00:00:00",
        endDate: "1949-01-01 00:00:00",
        sourceText: "Hans-Hermann Hoppe is a German-American paleolibertarian and anarcho-capitalist political theorist. He is Professor Emeritus of Economics at the University of Nevada, Las Vegas (UNLV), Senior Fellow of the Ludwig von Mises Institute, and the founder and..."
    },
    {
        chronofloId: 73561,
        title: "Ken Wilber",
        startDate: "1949-01-01 00:00:00",
        endDate: "1949-01-01 00:00:00",
        sourceText: "Kenneth Earl Wilber II is an American philosopher and writer on transpersonal psychology and his own integral theory, a philosophy which suggests the synthesis of all human knowledge and experience."
    },
    {
        chronofloId: 73559,
        title: "Slavoj Žižek",
        startDate: "1949-01-01 00:00:00",
        endDate: "1949-01-01 00:00:00",
        sourceText: "Slavoj Žižek is a Slovenian philosopher, a researcher at the Department of Philosophy of the University of Ljubljana Faculty of Arts and international director of the Birkbeck Institute for the Humanities of the University of London. He is also Global..."
    },
    {
        chronofloId: 73562,
        title: "Luc Ferry",
        startDate: "1951-01-01 00:00:00",
        endDate: "1951-01-01 00:00:00",
        sourceText: "Luc Ferry is a French philosopher and politician, and a proponent of secular humanism. He is a former member of the Saint-Simon Foundation think-tank."
    },
    {
        chronofloId: 73563,
        title: "André Comte-Sponville",
        startDate: "1952-01-01 00:00:00",
        endDate: "1952-01-01 00:00:00",
        sourceText: "André Comte-Sponville is a French philosopher."
    },
    {
        chronofloId: 73564,
        title: "John Dupré",
        startDate: "1952-01-01 00:00:00",
        endDate: "1952-01-01 00:00:00",
        sourceText: "John A. Dupré is a British philosopher of science. He is the director of Egenis, the Centre for the Study of Life Sciences, and professor of philosophy at the University of Exeter. Dupré's chief work area lies in philosophy of biology, philosophy of the..."
    },
    {
        chronofloId: 73565,
        title: "Cornel West",
        startDate: "1953-01-01 00:00:00",
        endDate: "1953-01-01 00:00:00",
        sourceText: "Cornel Ronald West is an American philosopher, political activist, social critic, actor, and public intellectual."
    },
    {
        chronofloId: 73568,
        title: "Judith Butler",
        startDate: "1956-01-01 00:00:00",
        endDate: "1956-01-01 00:00:00",
        sourceText: "Judith Pamela Butler is an American philosopher and gender theorist whose work has influenced political philosophy, ethics, and the fields of third-wave feminism, queer theory, and literary theory. In 1993, Butler began teaching at the University of..."
    },
    {
        chronofloId: 73567,
        title: "Alexander Wendt",
        startDate: "1958-01-01 00:00:00",
        endDate: "1958-01-01 00:00:00",
        sourceText: "Alexander Wendt is an American political scientist who is one of the core social constructivist researchers in the field of international relations, and a key contributor to quantum social science. Wendt and academics such as Nicholas Onuf, Peter J...."
    },
    {
        chronofloId: 73566,
        title: "Michel Onfray",
        startDate: "1959-01-01 00:00:00",
        endDate: "1959-01-01 00:00:00",
        sourceText: "Michel Onfray is a French writer and philosopher. Having a hedonistic, epicurean and atheist world view, he is a highly prolific author on philosophy, having written over 100 books. His philosophy is mainly influenced by such thinkers as Nietzsche,..."
    },
    {
        chronofloId: 73570,
        title: "Alain de Botton",
        startDate: "1969-01-01 00:00:00",
        endDate: "1969-01-01 00:00:00",
        sourceText: "Alain de Botton is a Swiss-born British philosopher and author. His books discuss various contemporary subjects and themes, emphasizing philosophy's relevance to everyday life. He published Essays in Love (1993), which went on to sell two million copies...."
    },
    {
        chronofloId: 73569,
        title: "Nick Bostrom",
        startDate: "1973-01-01 00:00:00",
        endDate: "1973-01-01 00:00:00",
        sourceText: "Nick Bostrom is a Swedish-born philosopher at the University of Oxford known for his work on existential risk, the anthropic principle, human enhancement ethics, superintelligence risks, and the reversal test. In 2011, he founded the Oxford Martin Program..."
    }
];

// Ručné profily sa načítavajú zo súboru data/philosopher-profiles.js.
// Tento hlavný súbor rieši import ChronoFlo dát, fallback logiku a vykreslenie časovej osi.

function slugify(value) {
    return value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
}

function parseTimelineYear(date) {
    const parsed = date.match(/^(\d+)\s*(BC)?-/);
    if (!parsed) return 0;
    const year = Number(parsed[1]);
    return parsed[2] ? -year : year;
}

const localizedNameMap = {
    "Pherecydes of Syros": "Ferekydes zo Syru",
    "Anaximander of Miletus": "Anaximandros",
    "Anaximenes of Miletus": "Anaximenes",
    "Pythagoras of Samos": "Pythagoras",
    "Xenophanes of Colophon": "Xenofanes z Kolofónu",
    "Heraclitus of Ephesus": "Herakleitos",
    "Epicharmus of Kos": "Epicharmos z Kóu",
    "Parmenides of Elea": "Parmenides",
    "Anaxagoras of Clazomenae": "Anaxagoras z Klazomén",
    "Empedocles": "Empedokles",
    "Zeno of Elea": "Zenón z Eley",
    "Gorgias": "Gorgias",
    "Gorgias.": "Gorgias",
    "Protagoras of Abdera": "Protagoras z Abdér",
    "Antiphon": "Antifón",
    "Prodicus of Ceos": "Prodikos z Keu",
    "Hippias": "Hippias",
    "Critias of Athens": "Kritias z Atén",
    "Thrasymachus of Miletus": "Thrasymachos",
    "Leucippus of Miletus": "Leukippos",
    "Democritus of Abdera": "Demokritos z Abdér",
    "Diagoras of Melos": "Diagoras z Mélu",
    "Antisthenes": "Antisthenes",
    "Aristippus of Cyrene": "Aristippos z Kyrény",
    "Xenophon": "Xenofón",
    "Eudoxus of Cnidus": "Eudoxos z Knidu",
    "Speusippus": "Speusippos",
    "Diogenes of Sinope": "Diogenes zo Sinopy",
    "Diogenes of Apollonia": "Diogenes z Apollónie",
    "Theophrastus": "Theofrastos",
    "Pyrrho of Elis": "Pyrrhón z Élidy",
    "Epicurus": "Epikuros",
    "Zeno of Citium": "Zenón z Kitia",
    "Theodorus the Atheist": "Theodoros Ateista",
    "Strato of Lampsacus": "Stratón z Lampsaku",
    "Aristarchus of Samos": "Aristarchos zo Samu",
    "Chrysippus of Soli": "Chrysippos zo Sol",
    "Carneades": "Karneades",
    "Hipparchus of Nicaea": "Hipparchos z Nikaie",
    "Philo": "Filón Alexandrijský",
    "Seneca the Younger": "Seneca mladší",
    "Hero of Alexandria": "Hérón Alexandrijský",
    "Quintilian": "Quintilianus",
    "Epictetus": "Epiktétos",
    "Marcus Aurelius": "Marcus Aurelius",
    "Sextus Empiricus": "Sextus Empiricus",
    "Plotinus": "Plotinos",
    "Porphyry": "Porfyrios",
    "Iamblichus of Syria": "Iamblichos",
    "Augustine of Hippo": "Augustín z Hippo",
    "Proclus": "Proklos",
    "Boethius": "Boethius"
};

const placeNameMap = {
    "Abdera": "Abdér",
    "Alexandria": "Alexandrie",
    "Apollonia": "Apollónie",
    "Athens": "Atén",
    "Citium": "Kitia",
    "Cnidus": "Knidu",
    "Colophon": "Kolofónu",
    "Cyrene": "Kyrény",
    "Ephesus": "Efezu",
    "Elea": "Eley",
    "Elis": "Élidy",
    "Hippo": "Hippo",
    "Lampsacus": "Lampsaku",
    "Melos": "Mélu",
    "Miletus": "Milétu",
    "Nicaea": "Nikaie",
    "Samos": "Samu",
    "Sinope": "Sinopy",
    "Soli": "Sol",
    "Syros": "Syru"
};

function localizeName(title) {
    if (localizedNameMap[title]) {
        return localizedNameMap[title];
    }

    let localized = title
        .replace(/^Saint\s+/i, "sv. ")
        .replace(/\bthe Younger\b/g, "mladší")
        .replace(/\bthe Elder\b/g, "starší")
        .replace(/\bthe Great\b/g, "Veľký");

    localized = localized.replace(/\bof ([A-Z][A-Za-z\s-]+)$/g, (match, place) => {
        return "z " + (placeNameMap[place] || place);
    });

    return localized;
}

function formatTimelineDate(startDate, endDate) {
    const start = parseTimelineYear(startDate);
    const end = parseTimelineYear(endDate);
    const sameDate = startDate === endDate;

    if (sameDate) {
        return start < 0 ? 'c. ' + Math.abs(start) + ' pred n. l.' : 'nar. ' + start + ' n. l.';
    }

    if (start < 0 && end < 0) {
        return 'c. ' + Math.abs(start) + '-' + Math.abs(end) + ' pred n. l.';
    }

    if (start < 0 && end >= 0) {
        return 'c. ' + Math.abs(start) + ' pred n. l.-' + end + ' n. l.';
    }

    return start + '-' + end + ' n. l.';
}

function inferEra(year) {
    if (year < -450) return "Predsokratovci";
    if (year < -323) return "Klasické Grécko";
    if (year < 0) return "Helenizmus";
    if (year < 500) return "Rímska a neskorá antika";
    if (year < 1400) return "Stredovek";
    if (year < 1600) return "Renesancia";
    if (year < 1750) return "Raný novovek";
    if (year < 1850) return "Osvietenstvo a modernita";
    if (year < 1945) return "Moderná filozofia";
    return "Súčasná filozofia";
}

function inferSchool(text) {
    const lower = text.toLowerCase();
    if (lower.includes("stoic")) return "Stoicizmus";
    if (lower.includes("epicurean")) return "Epikureizmus";
    if (lower.includes("skeptic") || lower.includes("sceptic")) return "Skepticizmus";
    if (lower.includes("neoplaton")) return "Novoplatonizmus";
    if (lower.includes("platon")) return "Platónska tradícia";
    if (lower.includes("aristotel") || lower.includes("peripatetic")) return "Aristotelovská tradícia";
    if (lower.includes("scholastic")) return "Scholastika";
    if (lower.includes("existential")) return "Existencializmus";
    if (lower.includes("phenomenolog")) return "Fenomenológia";
    if (lower.includes("analytic")) return "Analytická filozofia";
    if (lower.includes("pragmat")) return "Pragmatizmus";
    if (lower.includes("idealism")) return "Idealizmus";
    if (lower.includes("empiric")) return "Empirizmus";
    if (lower.includes("rational")) return "Racionalizmus";
    if (lower.includes("political")) return "Politická filozofia";
    if (lower.includes("ethic") || lower.includes("moral")) return "Etika";
    if (lower.includes("science") || lower.includes("mathematic") || lower.includes("astronom")) return "Filozofia vedy a prírody";
    return "";
}

function inferFocus(text) {
    const lower = text.toLowerCase();
    if (lower.includes("stoic")) return "ChronoFlo ho spája so stoickou tradíciou, ktorá zdôrazňuje cnosť, sebavládu a vnútornú slobodu.";
    if (lower.includes("epicurean")) return "Záznam ho spája s epikurejským myslením, teda s otázkami pokojného života, radosti, priateľstva a zbavenia sa strachu.";
    if (lower.includes("skeptic") || lower.includes("sceptic")) return "Dôležitý je najmä pre skeptickú otázku, čo môžeme tvrdiť s istotou a kedy je múdre zdržať sa súdu.";
    if (lower.includes("neoplaton")) return "Patrí k novoplatonizmu, kde sa rozvíja obraz skutočnosti ako usporiadanej hierarchie bytia, rozumu a duše.";
    if (lower.includes("theolog") || lower.includes("christian")) return "Jeho profil stojí na rozhraní filozofie, teológie a otázok viery, rozumu, duše a dejín.";
    if (lower.includes("political")) return "Záznam ho spája s politickou filozofiou, verejným životom a otázkami moci, práva alebo občianstva.";
    if (lower.includes("ethic") || lower.includes("moral")) return "Ťažisko profilu tvoria etické otázky: ako konať, ako žiť a aký charakter má dobrý život.";
    if (lower.includes("mathematic") || lower.includes("astronom") || lower.includes("scientist") || lower.includes("science")) return "Je dôležitý pre vedecké a prírodné myslenie, kde sa rozum, pozorovanie a dôkaz stávajú nástrojmi porozumenia prírode.";
    if (lower.includes("rhetor")) return "Dôležitá je u neho rétorika, jazyk a schopnosť reči formovať myslenie aj verejný priestor.";
    if (lower.includes("phenomenolog")) return "Patrí do fenomenologickej línie, ktorá skúma skúsenosť, vedomie a spôsob, akým sa nám svet javí.";
    if (lower.includes("existential")) return "Záznam ho spája s existenciálnymi otázkami slobody, zodpovednosti, úzkosti a zmyslu života.";
    if (lower.includes("analytic")) return "Profil smeruje k analytickej filozofii, teda k dôrazu na jazyk, logiku, argument a presnosť pojmov.";
    if (lower.includes("femin")) return "Jeho/jej význam sa dotýka aj feministického myslenia, kritiky spoločenských rolí a otázok rovnosti.";
    return "Tento záznam ho predstavuje ako súčasť širšej tradície západného myslenia, ktorú možno neskôr redakčne rozšíriť o presnejší výklad.";
}

function inferSpecificContribution(text) {
    const lower = text.toLowerCase();
    if (lower.includes("paradox")) return "Je známy najmä vďaka paradoxom, ktoré skúšajú naše chápanie pohybu, priestoru, času a nekonečného delenia.";
    if (lower.includes("atomic theory") || lower.includes("atomism") || lower.includes("atoms")) return "Je známy najmä pre atomistické vysvetlenie sveta, v ktorom sa skutočnosť chápe cez atómy, prázdno a prirodzený pohyb.";
    if (lower.includes("man is the measure")) return "Preslávil sa tézou, že človek je mierou vecí, čím otvoril otázky pravdy, poznania a ľudskej perspektívy.";
    if (lower.includes("heliocentric")) return "Je dôležitý pre heliocentrickú predstavu kozmu, v ktorej sa stredom známeho vesmíru stáva Slnko.";
    if (lower.includes("stoic")) return "Je spojený so stoicizmom, ktorý kladie dôraz na cnosť, sebavládu, rozum a vnútornú slobodu.";
    if (lower.includes("epicurean")) return "Je spojený s epikurejskou tradíciou, ktorá hľadá pokoj duše, priateľstvo a život zbavený zbytočného strachu.";
    if (lower.includes("pyrrhon") || lower.includes("skeptic") || lower.includes("sceptic")) return "Je dôležitý pre skeptickú tradíciu, ktorá skúma hranice istoty a odporúča opatrnosť v súdoch.";
    if (lower.includes("neoplaton")) return "Patrí k novoplatonizmu, kde sa svet chápe ako usporiadaná hierarchia bytia, rozumu a duše.";
    if (lower.includes("academy") || lower.includes("platonist")) return "Je spätý s platónskou tradíciou, ktorá premýšľa o ideách, poznaní, duši a poriadku obce.";
    if (lower.includes("lyceum") || lower.includes("peripatetic")) return "Patrí k aristotelovskej a peripatetickej línii, ktorá systematicky skúma prírodu, logiku, etiku a poznanie.";
    if (lower.includes("cosmogony") || lower.includes("cosmology")) return "Premýšľal o vzniku sveta, poriadku kozmu a prvých princípoch skutočnosti.";
    if (lower.includes("rhetoric") || lower.includes("rhetorician")) return "Jeho význam súvisí s rétorikou, presviedčaním a tým, ako jazyk formuje verejný život.";
    if (lower.includes("theologian") || lower.includes("christian")) return "Jeho myslenie prepája filozofiu s teológiou, otázkami viery, rozumu, vôle a duše.";
    if (lower.includes("mathematician") || lower.includes("astronomer")) return "Je dôležitý pre spojenie filozofického uvažovania s matematikou, pozorovaním a výkladom prírody.";
    if (lower.includes("political")) return "Je významný pre politickú filozofiu, najmä pre otázky moci, práva, občianstva a spoločenského poriadku.";
    if (lower.includes("ethic") || lower.includes("moral")) return "Jeho profil sa dotýka etiky, charakteru a otázky, ako má človek žiť dobrý život.";
    if (lower.includes("femin")) return "Jeho/jej význam sa dotýka feministického myslenia, kritiky spoločenských rolí a otázok rovnosti.";
    if (lower.includes("existential")) return "Je spojený s existenciálnymi otázkami slobody, zodpovednosti, úzkosti a zmyslu života.";
    if (lower.includes("phenomenolog")) return "Patrí do fenomenologickej línie, ktorá skúma skúsenosť, vedomie a spôsob, akým sa nám svet javí.";
    if (lower.includes("analytic")) return "Patrí k analytickej filozofii, kde je dôležitá presnosť pojmov, jazyk, logika a argumentácia.";
    return "";
}

function extractProfileTopics(text) {
    const lower = text.toLowerCase();
    const topics = [];
    const topicRules = [
        [["atom", "atomic"], "atomizmus"],
        [["paradox"], "paradoxy"],
        [["cosmogony", "cosmology"], "kozmológia"],
        [["rhetoric", "rhetorician"], "rétorika"],
        [["logic"], "logika"],
        [["ethics", "ethical", "moral"], "etika"],
        [["political", "politics", "state", "republic"], "politická filozofia"],
        [["law", "rights", "justice"], "právo a spravodlivosť"],
        [["stoic"], "stoicizmus"],
        [["epicurean"], "epikureizmus"],
        [["skeptic", "sceptic", "pyrrhon"], "skepticizmus"],
        [["neoplaton"], "novoplatonizmus"],
        [["platonist", "platonic", "academy"], "platónska tradícia"],
        [["aristotelian", "peripatetic", "lyceum"], "aristotelovská tradícia"],
        [["scholastic"], "scholastika"],
        [["theology", "theologian", "christian"], "teológia"],
        [["mathematics", "mathematician", "geometry"], "matematika"],
        [["astronomy", "astronomer", "heliocentric"], "astronómia"],
        [["science", "scientific"], "veda"],
        [["language", "meaning"], "jazyk"],
        [["mind", "consciousness"], "myseľ a vedomie"],
        [["soul"], "duša"],
        [["knowledge", "epistemology"], "poznanie"],
        [["metaphysics", "being"], "metafyzika"],
        [["phenomenology", "phenomenological"], "fenomenológia"],
        [["existential", "existentialism"], "existencializmus"],
        [["analytic"], "analytická filozofia"],
        [["pragmatism", "pragmatist"], "pragmatizmus"],
        [["idealism", "idealist"], "idealizmus"],
        [["empiricism", "empiricist"], "empirizmus"],
        [["rationalism", "rationalist"], "racionalizmus"],
        [["utilitarian", "utilitarianism"], "utilitarizmus"],
        [["liberal", "liberty"], "liberalizmus"],
        [["feminism", "feminist", "gender"], "feministická filozofia"],
        [["marx", "communist", "capitalism"], "kritika spoločnosti"],
        [["aesthetics", "art"], "estetika"],
        [["education", "educator"], "výchova"],
        [["religion", "god"], "náboženstvo"],
        [["history", "historian"], "dejinné myslenie"]
    ];

    topicRules.forEach(([needles, label]) => {
        if (needles.some((needle) => lower.includes(needle))) {
            topics.push(label);
        }
    });

    return [...new Set(topics)].slice(0, 5);
}

function inferRole(text) {
    const lower = text.toLowerCase();
    const parts = [];

    if (lower.includes("greek")) parts.push("grécky");
    else if (lower.includes("roman")) parts.push("rímsky");
    else if (lower.includes("german")) parts.push("nemecký");
    else if (lower.includes("french")) parts.push("francúzsky");
    else if (lower.includes("british") || lower.includes("english")) parts.push("britský");
    else if (lower.includes("american")) parts.push("americký");
    else if (lower.includes("italian")) parts.push("taliansky");
    else if (lower.includes("jewish")) parts.push("židovský");
    else if (lower.includes("arab")) parts.push("arabský");
    else if (lower.includes("spanish")) parts.push("španielsky");

    if (lower.includes("stoic")) parts.push("stoický");
    else if (lower.includes("epicurean")) parts.push("epikurejský");
    else if (lower.includes("skeptic") || lower.includes("sceptic")) parts.push("skeptický");
    else if (lower.includes("neoplaton")) parts.push("novoplatónsky");
    else if (lower.includes("scholastic")) parts.push("scholastický");
    else if (lower.includes("existential")) parts.push("existencialistický");
    else if (lower.includes("phenomenolog")) parts.push("fenomenologický");
    else if (lower.includes("analytic")) parts.push("analytický");

    if (lower.includes("theologian")) return parts.concat("teológ a filozof").join(" ");
    if (lower.includes("mathematician") || lower.includes("astronomer") || lower.includes("scientist")) return parts.concat("učenec a filozof prírody").join(" ");
    if (lower.includes("rhetorician") || lower.includes("educator")) return parts.concat("učiteľ rétoriky a mysliteľ").join(" ");
    if (lower.includes("poet") || lower.includes("writer")) return parts.concat("autor a filozofický mysliteľ").join(" ");
    if (lower.includes("statesman") || lower.includes("politician")) return parts.concat("štátnik a filozof").join(" ");

    return parts.concat("filozof").join(" ");
}

function inferContribution(text) {
    const specific = inferSpecificContribution(text);
    if (specific) return specific;

    const lower = text.toLowerCase();
    if (lower.includes("founder")) return "V zdrojovom profile vystupuje najmä ako zakladateľ alebo kľúčová postava vlastnej školy myslenia.";
    if (lower.includes("pupil") || lower.includes("student")) return "Zaujímavý je aj tým, že nadväzuje na učenie svojho učiteľa a posúva ho do vlastného smeru.";
    if (lower.includes("commentary") || lower.includes("commentator")) return "Jeho význam spočíva najmä v komentovaní a sprostredkovaní starších filozofických textov.";
    if (lower.includes("logic")) return "V popredí jeho profilu stoja otázky logiky, argumentácie a presnosti pojmov.";
    if (lower.includes("political")) return "Dôležitý je pre premýšľanie o moci, spoločnosti, práve a verejnom živote.";
    if (lower.includes("ethic") || lower.includes("moral")) return "Jeho myslenie sa dotýka najmä morálky, charakteru a otázky dobrého života.";
    if (lower.includes("cosmogony") || lower.includes("cosmology")) return "Patrí k autorom, ktorí premýšľali o vzniku sveta, poriadku kozmu a prvých princípoch.";
    if (lower.includes("rhetoric") || lower.includes("rhetorician")) return "Jeho profil súvisí s rétorikou, presviedčaním a kultúrou verejnej reči.";
    if (lower.includes("mathemat") || lower.includes("astronom")) return "Dôležitý je pre spojenie filozofického uvažovania s matematikou, pozorovaním a výkladom prírody.";
    if (lower.includes("femin")) return "Jeho/jej význam sa dotýka kritiky spoločenských rolí, rovnosti a moderného chápania slobody.";
    const topics = extractProfileTopics(text);
    if (topics.length > 0) {
        return "V jeho profile vystupujú najmä tieto témy: " + topics.join(", ") + ".";
    }

    return "Zdrojový záznam ho predstavuje cez jeho miesto, obdobie a intelektuálny okruh v dejinách západného myslenia.";
}

function inferIdeas(text, name, era) {
    const ideas = [];
    const lower = text.toLowerCase();
    if (lower.includes("stoic")) ideas.push("stoická cnosť", "sebavláda");
    if (lower.includes("atomic theory") || lower.includes("atomism") || lower.includes("atoms")) ideas.push("atomizmus", "atómy a prázdno");
    if (lower.includes("heliocentric")) ideas.push("heliocentrizmus", "kozmológia");
    if (lower.includes("man is the measure")) ideas.push("človek ako miera", "pravda a perspektíva");
    if (lower.includes("epicurean")) ideas.push("pokoj duše", "mierny pôžitok");
    if (lower.includes("skeptic") || lower.includes("sceptic")) ideas.push("zdržanie sa súdu", "hranice poznania");
    if (lower.includes("political")) ideas.push("politický poriadok", "občiansky život");
    if (lower.includes("ethic") || lower.includes("moral")) ideas.push("etika", "dobrý život");
    if (lower.includes("language") || lower.includes("rhetor")) ideas.push("jazyk", "rétorika");
    if (lower.includes("science") || lower.includes("mathematic")) ideas.push("vedecké myslenie", "prírodný poriadok");
    if (lower.includes("phenomenolog")) ideas.push("skúsenosť", "vedomie");
    if (lower.includes("existential")) ideas.push("sloboda", "zodpovednosť");
    if (lower.includes("theolog") || lower.includes("christian")) ideas.push("viera a rozum", "teológia");
    if (lower.includes("rational")) ideas.push("racionalizmus", "rozum");
    if (lower.includes("empiric")) ideas.push("empirizmus", "skúsenosť");
    if (lower.includes("idealism")) ideas.push("idealizmus", "duch");
    if (lower.includes("femin")) ideas.push("feministická kritika", "rovnosť");
    if (lower.includes("liberal")) ideas.push("liberalizmus", "sloboda jednotlivca");
    if (lower.includes("marx")) ideas.push("kritika spoločnosti", "dejiny a moc");
    if (lower.includes("paradox")) ideas.push("paradoxy", "pohyb a nekonečno");
    if (lower.includes("cosmogony") || lower.includes("cosmology")) ideas.push("kozmológia", "prvé princípy");
    if (lower.includes("founder")) ideas.push("založenie školy");
    if (lower.includes("commentary") || lower.includes("commentator")) ideas.push("komentár k tradícii");
    if (lower.includes("virtue")) ideas.push("cnosť");
    if (lower.includes("justice")) ideas.push("spravodlivosť");
    if (lower.includes("freedom") || lower.includes("liberty")) ideas.push("sloboda");
    if (lower.includes("mind")) ideas.push("myseľ");
    if (lower.includes("soul")) ideas.push("duša");
    extractProfileTopics(text).forEach((topic) => ideas.push(topic));
    if (ideas.length < 3) ideas.push("život a dielo", "otázky myslenia", "miesto v tradícii");
    return [...new Set(ideas)].slice(0, 4);
}

function buildDescription(entry, name) {
    return name + " patrí do dejín západného myslenia ako " + inferRole(entry.sourceText) + ". " + inferContribution(entry.sourceText);
}

function inferWorks(text) {
    const lower = text.toLowerCase();
    const works = [];

    const italicLike = text.match(/\b(?:De rerum natura|On the Nature of Things|Meditations|Confessions|The Consolation of Philosophy|Critique of Pure Reason|Being and Time|Being and Nothingness|The Second Sex|The Republic|Nicomachean Ethics|Politics|Metaphysics)\b/g);
    if (italicLike) works.push(...italicLike);
    if (lower.includes("dialogue") || lower.includes("dialogues")) works.push("dialógy a zachované svedectvá");
    if (lower.includes("fragment") || lower.includes("fragments")) works.push("fragmenty");
    if (lower.includes("commentary") || lower.includes("commentaries")) works.push("komentáre");
    if (lower.includes("letters") || lower.includes("letter")) works.push("listy");
    if (lower.includes("treatise") || lower.includes("treatises")) works.push("traktáty");
    if (lower.includes("poem") || lower.includes("poet")) works.push("básnické a filozofické texty");
    if (lower.includes("writings")) works.push("zachované spisy");

    return [...new Set(works)].slice(0, 4);
}

function buildPhilosopher(entry) {
    const slug = slugify(entry.title) || "philosopher-" + entry.chronofloId;
    const customKey = customProfiles[slug + "-" + entry.chronofloId] ? slug + "-" + entry.chronofloId : slug;
    const override = customProfiles[customKey] || {};
    const name = override.name || localizeName(entry.title);
    const year = parseTimelineYear(entry.startDate);
    const hasCustomProfile = Object.prototype.hasOwnProperty.call(customProfiles, customKey);

    return {
        chronofloId: entry.chronofloId,
        id: override.id || slug,
        name,
        dates: override.dates || formatTimelineDate(entry.startDate, entry.endDate),
        era: override.era || inferEra(year),
        school: override.school || inferSchool(entry.sourceText),
        image: override.image || "images/philosophers/" + slug + ".png",
        description: hasCustomProfile ? override.description : buildDescription(entry, name),
        ideas: hasCustomProfile ? override.ideas : inferIdeas(entry.sourceText, name, override.era || inferEra(year)),
        works: hasCustomProfile ? override.works : inferWorks(entry.sourceText),
        note: override.note || placeholderNote,
        sourceText: entry.sourceText
    };
}

function ensureUniqueIds(items) {
    const seen = new Map();

    return items.map((item) => {
        const count = seen.get(item.id) || 0;
        seen.set(item.id, count + 1);

        if (count === 0) {
            return item;
        }

        return {
            ...item,
            id: item.id + "-" + item.chronofloId
        };
    });
}

const philosophers = ensureUniqueIds(chronofloPhilosophers.map(buildPhilosopher));

const missingCustomProfiles = chronofloPhilosophers
    .map((entry) => slugify(entry.title))
    .filter((slug) => !customProfiles[slug]);

console.log("ChronoFlo profiles:", chronofloPhilosophers.length);
console.log("Custom profiles:", Object.keys(customProfiles).length);
console.log("Missing custom profiles:", missingCustomProfiles);

const selectedCard = document.getElementById("selected-philosopher-card");
const timeline = document.getElementById("philosopher-timeline");
const scrollLeftButton = document.querySelector(".scroll-button-left");
const scrollRightButton = document.querySelector(".scroll-button-right");
const timelineLine = document.createElement("div");
timelineLine.className = "timeline-line";

function getInitials(name) {
    return name
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0])
        .join("")
        .toUpperCase();
}

function createPortrait(philosopher, className = "philosopher-portrait") {
    const portrait = document.createElement("span");
    portrait.className = className;

    const image = document.createElement("img");
    image.src = philosopher.image;
    image.alt = "";
    image.setAttribute("aria-hidden", "true");

    const initials = document.createElement("span");
    initials.className = "portrait-initials";
    initials.textContent = getInitials(philosopher.name);

    image.addEventListener("load", () => {
        portrait.classList.add("image-loaded");
    });

    image.addEventListener("error", () => {
        portrait.classList.remove("image-loaded");
    });

    if (image.complete && image.naturalWidth > 0) {
        portrait.classList.add("image-loaded");
    }

    portrait.append(image, initials);
    return portrait;
}

function renderList(items) {
    return items.map((item) => `<li>${item}</li>`).join("");
}

function renderOptionalListSection(title, items) {
    if (!items || items.length === 0) {
        return "";
    }

    return `
        <section class="detail-section">
            <h3>${title}</h3>
            <ul>${renderList(items)}</ul>
        </section>
    `;
}

function renderSelectedPhilosopher(philosopher) {
    selectedCard.innerHTML = "";
    selectedCard.appendChild(createPortrait(philosopher));

    const copy = document.createElement("div");
    copy.className = "detail-copy";
    const schoolLine = philosopher.school ? `<p class="detail-school">${philosopher.school}</p>` : "";
    const description = philosopher.description && philosopher.description.trim()
        ? philosopher.description
        : "Profil čaká na redakčné spracovanie.";

    copy.innerHTML = `
        <div class="detail-meta-line">
            <span>${philosopher.dates}</span>
            <span>${philosopher.era}</span>
        </div>
        <h2>${philosopher.name}</h2>
        ${schoolLine}
        <p class="detail-description">${description}</p>
        <div class="detail-columns">
            ${renderOptionalListSection("Kľúčové idey", philosopher.ideas)}
            ${renderOptionalListSection("Diela / zdroje", philosopher.works)}
            <p class="detail-note">${philosopher.note}</p>
        </div>
    `;
    selectedCard.appendChild(copy);
}

function setActiveTimelineCard(id) {
    timeline.querySelectorAll(".timeline-card").forEach((card) => {
        card.classList.toggle("is-active", card.dataset.id === id);
    });
}

function selectPhilosopher(philosopher, card) {
    renderSelectedPhilosopher(philosopher);
    setActiveTimelineCard(philosopher.id);

    if (card) {
        card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
}

function createTimelineCard(philosopher) {
    const card = document.createElement("button");
    card.className = "timeline-card";
    card.type = "button";
    card.dataset.id = philosopher.id;
    card.dataset.era = philosopher.era;
    card.setAttribute("aria-label", `${philosopher.name}, zobraziť profil`);

    const copy = document.createElement("span");
    copy.className = "timeline-card-copy";
    copy.innerHTML = `
        <span class="timeline-card-name">${philosopher.name}</span>
        <span class="timeline-card-dates">${philosopher.dates}</span>
    `;

    card.append(createPortrait(philosopher), copy);
    card.addEventListener("click", () => selectPhilosopher(philosopher, card));
    return card;
}

function renderTimeline() {
    const fragment = document.createDocumentFragment();

    timeline.appendChild(timelineLine);

    philosophers.forEach((philosopher) => {
        fragment.appendChild(createTimelineCard(philosopher));
    });

    timeline.appendChild(fragment);
    updateTimelineLine();
    selectPhilosopher(philosophers[0]);
}

function updateTimelineLine() {
    timelineLine.style.width = `${Math.max(0, timeline.scrollWidth - 16)}px`;
}

scrollLeftButton.addEventListener("click", () => {
    timeline.scrollBy({ left: -420, behavior: "smooth" });
});

scrollRightButton.addEventListener("click", () => {
    timeline.scrollBy({ left: 420, behavior: "smooth" });
});

renderTimeline();

window.addEventListener("resize", updateTimelineLine);


