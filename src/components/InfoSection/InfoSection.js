import React from 'react';
import style from './InfoSection.module.scss';

const InfoSection = ({see}) => (
    <div className={`${style.wrapper} ${see && style.see}`}>
        <h1>Cześć,</h1>
        <h3>Strona ta przedstawia zarys moich doświadczeń, wyglądem ma przypominać zwykłe, papierowe CV, ale wzbogacone o dodatkowe funkcje dzięki wykorzystaniu przeglądarki. Cały czas rozwijam tą stronę i mam parę rzeczy do wdrożenia, jednak efekektem już chciałbym się podzelić ze światem.</h3>
        <h3>Kod można podejżeć na&nbsp;<a href="https://github.com/P4NTY/CV-project" target="_blank" rel="noopener noreferrer">githubie</a>.</h3>
        <h3>Jeżeli zainteresowało cię to co się tutaj znajduje, bądź chciałbyś się ze mną skontaktować formularz kontaktowy kryję się pod ikonką listu w pasku po lewej. Jestem wdzięczny za każdą opinię jak i chęć kontaktu. W miarę możliwości staram się odpowiadać na każdego maila.</h3>
        <p>Miłego surfowania po sieci.</p>
    </div>
)

export default InfoSection;