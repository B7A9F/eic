**Contents**  
[Exemple de proces EiC	1](#exemple-de-proces-eic)

[Tabelul 1 al consoanelor:	2](#tabelul-1-al-consoanelor:-cuprinde-toate-grafemele-consonantice-ale-limbii-engleze-și-fonemele-corespondente*-și-fonemele-ipa-și-fonemele-eic-corespondente-și-grafemele-de-output-\(cuvânt-eic\))

[Tabelul 2 al vocalelor	2](#tabelul-2-al-vocalelor-cuprinde-toate-fonemele-vocalice-ipa-și-echivalentul-lor-în-eic,-precum-și-culorile-pe-care-le-generează-în-cuvântul-original.)

[Tabelul 3	2](#tabelul-3-cuprinde-strict-fonemele-c-v-și-grafemele-pe-care-se-aplică,-precum-și-excepția-c-v)

[Tabelul 4	2](#tabelul-4-cuprinde-excepția-v-r,-cazurile-pe-care-se-aplică,-fonemele-și-grafemele-corespondente)

[Reguli de reprezentare EiC	2](#reguli-de-reprezentare-eic.)

[Prelucrarea EiC manuală:	3](#prelucrarea-eic-manuală:)

[*Instrument de lucru pentru prelucrarea manuală: Codul de culori*	3](#instrument-de-lucru-pentru-prelucrarea-manuală:-codul-de-culori)

[Tabel 1: Foneme Consoane IPA → Fonem EiC (cu Grafeme și Diacritice)	3](#tabel-1:-foneme-consoane-ipa-→-fonem-eic-\(cu-grafeme-și-diacritice\))

[Tabel 1 – Foneme IPA \> Foneme EiC= Grafem IPA \> Grafem EiC	3](#tabel-1-–-foneme-ipa-\>-foneme-eic=-grafem-ipa-\>-grafem-eic)

[Tabel 2: Foneme Vocale IPA → Fonem EiC	8](#tabel-2:-foneme-vocale-ipa-→-fonem-eic)

[**ALGORITMUL CANONIC INTEGRAL (EIC) \- VERSIUNEA FINALĂ INTEGRATĂ**	11](#algoritmul-canonic-integral-\(eic\)---versiunea-finală-integrată)

[**PRINCIPII STRUCTURALE ESENȚIALE**	11](#principii-structurale-esențiale)

[**I. BLOCUL DE PREPROCESARE ȘI STRUCTURĂ (I.1 – I.6)**	11](#i.-blocul-de-preprocesare-și-structură-\(i.1-–-i.6\))

[**II. BLOCUL DE ETICHETARE LINGVISTICĂ ȘI MARCAJ (P1–P7)**	12](#ii.-blocul-de-etichetare-lingvistică-și-marcaj-\(p1–p7\))

[**III. BLOCUL VIZUAL ȘI DE IEȘIRE**	13](#iii.-blocul-vizual-și-de-ieșire)

[Segmentare C-C1 și V-V1:	13](#segmentare-c-c1-și-v-v1:-???-teacher)

[Tabel vizualizare (deocamdată se vor introduce manual)	14](#tabel-vizualizare-\(deocamdată-se-vor-introduce-manual\))

# **Sistemul EiC** 

Scopul sistemului EiC este exprimarea grafică a transcrierii fonetice (a sunetelor și accentului) unui cuvânt direct în cuvântul original prin intermediul culorilor, a literelor cu diacritice și a liniuței de subliniere. 

### **Exemple de proces EiC** {#exemple-de-proces-eic}

| Cuvânt original | IPA | EiC fonemic | Output: EiC grafemic |
| :---- | :---- | :---- | :---- |
| dog | d ɒ ɡ | **dɒg** | **dog** |
| mean | m i: n | **m i n** | **mean** |
| caught | k ɒ t   | **k ɒ t** | **caught** |
| lovely | ˈl ʌ v . l i  | **l ʌ v . l i** | **lovely** |
| teacher | ˈti:.tʃər | **t i** **. ch ə r** | **teacher** |
| culture | ˈkʌl.tʃər | **k** ʌ **l . ch ə r** | **culẗure** |

**Tabelul 1 al consoanelor:** cuprinde toate grafemele consonantice ale limbii engleze și fonemele corespondente\* și fonemele IPA și fonemele EiC corespondente și grafemele de output (cuvânt EiC)

\* cu excepția ridicării la putere *(care va fi implementată mai târziu în proiect)*

     

| t | ea | ch | e | r   | Input/cuvânt original/ grafeme consonantice originale/ litere originale |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **/t** | \_ | **tʃ**  | \_ | **r/**   | foneme consonantice/ litere-sunet consonantice din IPA |
| **/t** | \_ | **ch** | \_ | **r/**    | foneme corespondente/ litere-sunet din sistemul fonetic EiC1 |
| **t**              | **\_** | **ch** | **\_** | **r** | grafeme corespondente/ litere-sunet din sistemul grafemic EiC2 |

   
Exemplu de prelucrare C-C1

| t | ea | ch | e | r   | Input/cuvânt original/ grafeme consonantice originale/ litere originale |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **/t** | \_ | **tʃ**  | \_ | **r/**   | foneme consonantice/ litere-sunet consonantice din IPA |
| **/t** | \_ | **ch** | \_ | **r/**    | foneme corespondente/ litere-sunet din sistemul fonetic EiC1 |
| **t**              | **\_** | **ch** | **\_** | **r** | grafeme corespondente/ litere-sunet din sistemul grafemic EiC2 |

**Tabelul 2 al vocalelor** cuprinde toate fonemele vocalice IPA și echivalentul lor în EiC, precum și culorile pe care le generează în cuvântul original. 

| \_ | a | \_ | e | Input/cuvânt original/ grafeme vocalice originale/ litere originale |
| :---- | :---- | :---- | :---- | :---- |
| **\_** | eɪ | **\_** |  | foneme vocalice/ litere-sunet consonantice din IPA |
| **\_** | **eỷ** | **\_** |  | foneme corespondente/ litere-sunet din sistemul fonetic EiC1 |
| **\_** | **eỷ** | **\_** | **e** | grafeme vocalice corespondente/ litere-sunet din sistemul grafemic EiC2 |

**Tabelul 3** cuprinde strict fonemele C-V și grafemele pe care se aplică, precum și excepția C-V  
Exemplu: silabică naturală  
catholici**sm** \> kə-θɒ-lɪ-sɪ-**zəm \> ca-tho-li-ci-sm** 

**Tabelul 4** cuprinde excepția V-R, cazurile pe care se aplică, fonemele și grafemele corespondente  
Exemplu: silabică forțată  
near / nɪ.ər/ \> **near** (EiC standard)\> **near** (regulă C-V)

## **Reguli  de reprezentare EiC.**   {#reguli-de-reprezentare-eic.}

Grafeme. Diacritice. Exponent. Accent. Foneme. Reguli de separare a grafemelor vocale

1. ### **Grafemele** 

1. #### Grafemele consoanele 

1. au culoarea neagră când exprimă un fonem:

   top /tɒp/ \> **top**

   

2. se colorează gri:

   crumb /krʌm/ \> **crumb**

3. pot fi:   
- simple: 

  /top/ **top** 

- compuse: 

               /shot/ **shot**

-   cu diacritic:   
                     /sɛnt/ **ƈent, c̈ello,**   
- compuse cu diacritic: 

             /**ə**. ˈsend/ **ascend,** /ˈskuːnər/ **schooner**


***NB\! Grafemele  consoane compuse pot avea maxim patru consoane***

2. #### Grafemele vocale 

1. nu au un număr stabil de vocale, ci sunt formate din ***toată secvența de vocale continuă:***

   *(principiul alăturării vocalice)* 

   ## /kɑr/ \= **car**, /taʊn/ \= **town**, /**ˈ**poʊ. ər/ \= **power**, /aɪ/ **\=** eye, 

   Excepții la secvența continuă: 

- **e** mut prevăzut expres  
- separatorii de vocale: 

          \- grafemele semivocale w și y

          \- corespondența fonem – grafem (1:1, 2:2)

2. se colorează gri, dacă nu exprimă niciun grafem   
3. au culoarea fonemului pe care îl exprimă

     ***Situații speciale:***

1. Grafemul lui /ə/ negru:  **curse** /kərs/  
2. Grafemul lui /w/ \- negru, oricând w este în poziție prenucleică în diftong:

   **Wound, await, warm**

3. Grafemul lui /w/ este litera **u** în poziție prenucleică: u negru \+ diacritc: **ű**

   **qűeen** 

4. Grafemul lui /ỷ/ este **y** / **i** în pozițiile prenucleice și în diftongul /oỷ/: y/i roșu cu diacritic: **ỷ** / **ỉ**   
5. /ju/ nu are grafem **y**  
   

3. #### Grafemul simplu sau complex care nu corespunde niciunui sunet: 

   Principiul literei mute: adică dacă nu se văd bine, nu se pronunță 

   

1. se va colora gri, *adică dacă nu se văd bine, nu se pronunță (litera mută)*  
   grafemele-consoane:   
                     knight /**n**aɪt/ \> **knight**   
                        sigh  /saɪ/ \> **sigh**  
   grafemele-vocale, izolate (de consoane) de alte vocale cu fonem  
                    mute  /mju:t/ **\> mute**   
                     who    /hu:/    **\> who**   
     
2. **E** mut prevăzut expres1: **e** din –**ed**, dacă nu apare în transcrierea fonetică, chiar dacă face parte dintr-un grup de vocale:   
                   cooed /ku:d/ \> **cooed**   
3. **E** mut prevăzut expres2: **e** final de după **ow**:   
                                      stowe /stəʊ/ \> **stowe**

     
4. Sunetul care nu se regăsește în nicio literă sau grup de litere va apărea ca ridicare la putere:   
   kethib /ke’ti:v/ **\>** **kethivbh**   
   

2. ### **Accentul și transcrierea fonetică**

    Accentul în engleză se pune doar în IPA în două feluri:   
- cu apostrof  /ˈæksent/   
- cu subliniere /æksent/


  În EiC:

1. se subliniază direct în cuvânt și în transcriere:   
                   **acƈent** /æksent/  
2. se ia din IPA  
3. se subliniază doar grafemele vocale+semivocale din silaba accentuată:   
                  **taxi**  
4. se subliniază întreaga secvență vocalică:   
                  **beauty**  
5. se subliniază întregul diftong:   
                 **tower**, **ỷesterday**, **woman, lawỷer**   
   

                       \!Nu se subliniază accentul în monosilabice și în bisilabicele cu grafem consoană silabică:

                                 stop /stop/ \> **stop**

		  apple /ˈæ.pəl/ **apple**

3. ### **Fonemele**

Principiu: Fonemele (din transcrierea fonetică) trebuie să se regăsească în grafemele sau grupurile de grafeme (din cuvântul simplu).   
**Se dă:** mean /mɪn/  
**Logică EiC:** /m-ɪ-n/ IPA= /**m-i\-n**/ EiC  
**Prelucrare EiC:** m-e\-a\-n \> **mean** 

1. Fonemele consoane pot fi exprimate prin:  
1. literele corespondente: /z/=**z**, 

   zoo  /zu:/ \= **zoo**

2. litere corespondente duble: /s/=**ss**

   kiss /kis/ \= **kiss**

3. litere transformate: /z/= **ṡ**, 

   does  /dʌz/ \= **doeṡ**

4. grupuri de litere: /f/= **gh**. 

   enough /ɪˈnʌf/ \>  **enough**

5. litera corespondentă adăugată ca exponent (în cazul regulii 3): 

   /k/ \= k

*NB\! Fonemele consoane sunt simple sau compuse (din maxim 1-2 litere)*

*Notă:(din cele compuse vom face ligaturi)*

2. #### Fonemele vocalice 

   sunt unități formate din: 

1. dintr-un singur caracter (vocale pline): **ɑ, e, i:, ə, ɪ**…   
2. două caratere (diftongi: /je/, /ju/, /jʊ/, /jæ/, /aʊ/, /əʊ/, /aɪ/, /eɪ/, /jo/…)  
3. **doar în cazul prezenței ambelor semilabe, fonemul pot avea trei caractere**   
4. În EiC schwa /ə/ intotdeauna are silaba lui    
     
   \!Regulă: Fonemul are drept corespondent un grafem vocalic sau o secvență de grafeme vocalice, toate vor avea aceeași culoare. 

*Excepții:*

* **e din \-ed** morfologic final (idee: și aici poate fi separatory y: stayed)  
* **e** din **–we** final (idee: și aci poate fi separator)  
*   
  \!Limita fonemului vocalic este stabilită de divizarea silabică din IPA/EiC. Un fonem corespunde unei silabe. 

\!**Y** și **W** sunt semivocale și fac parte din fonemul decis prin divizarea silabică din IPA

\!Principiu: semivocala ca separator silabic (grafemic și fonetic)

\!Standardul EiC prevede:

1. rotacitate:   
                 car   /kɑr/=  **car**  
   b1.fuziunea cot-caught varianta /ɒ/:  

                                        (/ɑ/, /ɔ/, /ɒ/ \> /ɒ/)

   Seturile lexicale **LOT**/C**OT** și **COUGH**T/**THOUGHT**   
                                                                      vor avea /ɒ/, nu /ɒ/ (/ɑ/, /ɔ/, /ɒ/  
   b.2.fuziunea boy-door în varianta /o/ :   /ɔɪ /, /ɔ:r/ \> /oỷ/, /or/  
   

### **Separarea grafemelor vocalici**

       Reguli de separare pentru grupurile grafemice vocalice 

1. Un singur fonem corespunde la întreaga secvenţă de grafeme vocalice \> toată secvenţa vocalică devine grafemul lui.   
   Car, fraud – vocală plină, , loud, queen – diftongi, eye, queue – diftongi   
     
2. Două foneme vocalice (două silabe) alăturate corespund la două grafeme vocalice, împărţirea e directă 1:1 în ordine stânga spre dreapta   
   /ke.’ɑnu/ \> Keanu  
    real  
     
3. Două foneme şi trei-patru grafeme. O semivocală este prezentă

   Regulă: prioritate pentru semivocală (w sau y) când ea apare în setul de grafeme şi corespunde unui semivocal fonemic în unul dintre foneme. 

   Algoritm: 

- Detectează poziţia semivocalei w/y (și /u/i când funcţionează ca semivocală) în cele 3 grafeme.   
- O alocă fonemului căruia îi corespunde  
- Grafemele din stânga semivocalei sunt alocate fonemului din stânga, cele din dreapta fonemului din dreapta  
  Layer, lawyer  
  Royal, power, await  
    
4. Rezolvabile manual sau prin dicționar EiC   
   Contiguous, queueing  
   

## **Prelucrarea EiC manuală:** {#prelucrarea-eic-manuală:}

0. a. Se introduce cuvântul original  
   b. Se introduce transcrierea lui fonetică)  
1. Procesul de transcriere EiC începe de la transcrierea fonetică și nu invers.  
2. Se selectează fonemele EiC în caseta fonemelor  
3. a. Se colorează grafemele vocalice cu culoarea potrivită fonemului sau gri  
   b. Se selectează simbolul grafemic consonantic corespondent fonemului sau gri  
     
   **Intrare** \> **Ieșire EiC**  
    Fonem IPA: kɪt/ \> fonem EiC: /kit/  
    Grafem original: kit\> grafem EiC: **kit**   
     
   

### ***Instrument de lucru pentru prelucrarea manuală: Codul de culori*** {#instrument-de-lucru-pentru-prelucrarea-manuală:-codul-de-culori}

| boỷ\=ỉ        a    e    i    o     u     ə   əw   aw   ea    aỷ    eỷ    ỷu    ű\=week |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| ----- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | ----- |
| ***ƈ***   /s/ | ***đ***   /t/ | ***ᵮ*** /v/ | ***ğ***   /j/ | ***gh***  | ***ph*** | **r...**    /ər…/ | ***ṡ...***   /z/ | ***š…*    */zh/*** | ***t̂...*  /*sh*/** | ***ẗ…*   */ch/*** | ***th* */dh/*** | ***tɦ*   */th/*** | ***x̊*   */gz/*** |  |
|  |  |  |  |   /f/ |  |  |  |  |  |  |  |  |  |  |

### **Tabel 1: Foneme Consoane IPA → Fonem EiC (cu Grafeme și Diacritice)** {#tabel-1:-foneme-consoane-ipa-→-fonem-eic-(cu-grafeme-și-diacritice)}

| Tabel 1 – Foneme IPA \> Foneme EiC= Grafem IPA \> Grafem EiC |  |  |  |  |  |  |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| Fonem IPA | Fonem EiC | Grafem Englez | Grafem EiC  (cu diacritic sau fără) | Culoare | Exemple Lexicale de rezultat final EiC | Observații |
| /b/ | /b/ | b | b | Negru (\#000000) | bat, beautiful |  |
| /b/ | /b/ | bb | bb | Negru (\#000000) | rabbit, rubber |  |
| /d/ | /d/ | d | d | Negru (\#000000) | dog |  |
| /d/ | /d/ | dd | dd | Negru (\#000000) | address |  |
| /dʒ/ | /j/ | j | j | Negru (\#000000) | jam |  |
| /dʒ/ | /j/ | g | ğ | Negru (\#000000) | barğe |  |
| /dʒ/ | /j/ | gg | ğğ | Negru (\#000000) | veğğies |  |
| /dʒ/ | /j/ | dg | dğ | Negru (\#000000) | bridğe |  |
| /dʒ/ | /j/ | dj | dj | Negru (\#000000) | adjust |  |
| /g/ | /g/ | g | g | Negru (\#000000) | good, go |  |
| /g/ | /g/ | gg | gg | Negru (\#000000) | egg |  |
| /f/ | /f/ | f | f | Negru (\#000000) | fun, funny |  |
| /f/ | /f/ | ff | ff | Negru (\#000000) | off |  |
| /f/ | /f/ | ph | ph | Negru (\#000000) | phone, graph |  |
| /f/ | /f/ | gh | gh | Negru (\#000000) | enough |  |
| /h/ | /h/ | h | h | Negru (\#000000) | hat, he |  |
| /x/ | /x/ | h | h | Negru (\#000000) | loch |  |
| /tʃ/ | /ch/ | ch | ch | Negru (\#000000) | chair, church |  |
| /tʃ/ | /ch/ | tch | tch | Negru (\#000000) | watch |  |
| /tʃ/ | /ch/ | c | c̈ | Negru (\#000000) | c̈ello |  |
| /tʃ/ | /ch/ | t | ẗ | Negru (\#000000) | Siẗuation, culẗure,st ẗue |  |
| /k/ | /k/ | k | k | Negru (\#000000) | king |  |
| /k/ | /k/ | c | c | Negru (\#000000) | cat |  |
| /k/ | /k/ | cc | cc | Negru (\#000000) | accomodate |  |
| /k/ | /k/ | ck | ck | Negru (\#000000) | black |  |
| /k/ | /k/ | cq | cq | Negru (\#000000) | acquaintant |  |
| /k/ | /k/ | q | q | Negru (\#000000) | queen |  |
| /l/ | /l/ | l | l | Negru (\#000000) | leg |  |
| /l/ | /l/ | ll | ll | Negru (\#000000) | fall |  |
| /m/ | /m/ | m | m | Negru (\#000000) | man |  |
| /m/ | /m/ | mm | mm | Negru (\#000000) | summer |  |
| /n/ | /n/ | n | n | Negru (\#000000) | net |  |
| /n/ | /n/ | nn | nn | Negru (\#000000) | funny |  |
| /ŋ/ | /ŋ/ | ng | ng | Negru (\#000000) | sing |  |
| /ŋ/ | /ŋ/ | n | n | Negru (\#000000) | Bank, tank, uncle, funct̂ion |  |
| /ŋg/ | /ŋg/ | ng | ng | Negru (\#000000) | congress |  |
| /p/ | /p/ | p | p | Negru (\#000000) | pen, pronunciation |  |
| /p/ | /p/ | pp | pp | Negru (\#000000) | happy |  |
| /r/ | /r/ | r | r | Negru (\#000000) | red |  |
| /r/ | /r/ | rr | rr | Negru (\#000000) | better | EiC este rotic |
| /s/ | /s/ | s | s | Negru (\#000000) | sun, success |  |
| /s/ | /s/ | ss | ss | Negru (\#000000) | success |  |
| /s/ | /s/ | c | ƈ | Negru (\#000000) | ƈircus |  |
| /s/ | /s/ | cc | ƈƈ | Negru (\#000000) | sucƈess |  |
| /ʃ/ | /sh/ | sh | sh | Negru (\#000000) | she, fish |  |
| /ʃ/ | /sh/ | c | ĉ | Negru (\#000000) | oĉean |  |
| /ʃ/ | /sh/ | cĥ | ĉĥ | Negru (\#000000) | ĉĥef |  |
| /ʃ/ | /sh/ | s | ŝ | Negru (\#000000) | ŝure |  |
| /ʃ/ | /sh/ | ss | ŝŝ | Negru (\#000000 | miŝŝion |  |
| /ʃ/ | /sh/ | sch | ŝĉĥ | Negru (\#000000) | **borŝĉĥ** |  |
| /ʃ/ | /sh/ | t | t̂ | Negru (\#000000) | nat̂ion |  |
| /t/ | /t/ | t | t | Negru (\#000000) | top |  |
| /t/ | /t/ | tt | tt | Negru (\#000000) | letter |  |
| /θ/ | /th/ | th | tɦ | Negru (\#000000) | thin, think |  |
| /ð/ | /dh/ | th | th | Negru (\#000000) | this, father |  |
| /v/ | /v/ | v | v | Negru (\#000000) | van, vote |  |
| /v/ | /v/ | ph | ph | Negru (\#000000) | Stephen |  |
| /v/ | /v/ | f | ᵮ | Negru (\#000000) | oᵮ |  |
| /z/ | /z/ | z | z | Negru (\#000000) | zoo |  |
| /z/ | /z/ | zz | zz | Negru (\#000000) | fizz |  |
| /z/ | /z/ | s | ṡ | Negru (\#000000) | roṡe |  |
| /z/ | /z/ | x | ẋ | Negru (\#000000) | ẋylophone |  |
| /ʒ/ | /zh/ | s | š | Negru (\#000000) | vision, measure  television |  |
| /ʒ/ | /zh/ | g | ǧ | Negru (\#000000) | mirage |  |
| /w/ | /w/ | w | w | Negru (\#000000) | water, win |  |
| /w/ | /w/ | u | ű | Negru (\#000000) | qűeen |  |
| /gz/ | /gz/ | x | ӿ | Negru (\#000000) | example |  |
| /ks/ | /ks/ | x | x | Negru (\#000000) | sex |  |
| /ksh/ | /ksh/ | x | x̄ | Negru (\#000000) | sex̄ual |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |

| Tabelul 3 V-R greedy  |  |  |  |  |  |  |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| Se prelucrează în blocul II al agloritmului  Este unica excepție parțială de la interdicția V/C și V-C  Se aplică în exclusivitate doar seturilor lexicale bear, near, cure, toor, fire, hour |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
| /ək/ | /k/ | c | c | Alb cu chenar negru | McDonald | /ə/ \+/k/  |
| /əl/ | /l/ | l | l | Alb cu chenar negru | little | /ə/ fără grafem+ /l/ |
| /əm/ | /m/ | m | m | Alb cu chenar negru | Communism, rhythm | /ə/ fără grafem \+ /m/ |
| /ən/ | /n/ | n | n | Alb cu chenar negru | Isn’t, didn’t | /ə/ fără grafem \+ /n/ |
| /ər/ | /r/ | r | r | Alb cu chenar negru | Near, aire, stare | /ə/ fără grafem \+ /r/ |
|  |  |  |  |  |  |  |

### **Tabel 2: Foneme Vocale IPA → Fonem EiC**  {#tabel-2:-foneme-vocale-ipa-→-fonem-eic}

Nu este definitivat\!\!\!\!

| IPA | Fonem EiC | Culoare grafem  în cuvintele EiC corespunzătoare fonemului | Exemple engleză |  |
| :---- | :---- | :---- | :---- | :---- |
| /æ/ | /æ/ | Albastru deschis (\#00b0f0) | **a**pple, c**a**t | Orice grafem vocală sau grup de vocale care corespunde în ordinea grafemelor fonemului  /æ/ |
| /ʌ/ | /ʌ/ | Gradient: Verde închis (\#008E40) 70% → Negru 30% | s**o**n, c**u**p | Orice grafem vocală sau grup de vocale care corespunde în ordinea grafemelor fonemului   |
| /ɑː/ | /a/ | Verde închis (\#008E40) | c**a**r, f**a**ther | Orice grafem vocală sau grup de vocale care corespunde în ordinea grafemelor fonemului   |
| /ə/, /ɜː/ | /ə/ | Negru (\#000000) | about, taken | Orice grafem vocală sau grup de vocale care corespunde în ordinea grafemelor fonemului  /ə/ |
| /e/, /ɛ/ | /e/ | Portocaliu (\#EE5B00) | b**e**d, h**ea**d | Orice grafem vocală sau grup de vocale care corespunde în ordinea grafemelor fonemului   |
| /ɪ/ | /ɪ/ | Gradient: Roșu (\#CC0000) 70% → Negru 30% | s**i**t, t**i**p | Orice grafem vocală sau grup de vocale care corespunde în ordinea grafemelor fonemului   |
| /iː/ | /i/ | Roșu (\#CC0000) | s**ee**, m**ea**n | Orice grafem vocală sau grup de vocale care corespunde în ordinea grafemelor fonemului   |
| /ɒ/,/ɔ /, ɔ:/ | /ɒ/ | Gradient: Roz (\#FF3399) 70% → Negru 30% | h**o**t, wh**a**t, l**aw**n, c**au**ght | Orice grafem vocală sau grup de vocale care corespunde în ordinea grafemelor fonemului   |
| /ɔː/ | /o/ | Roz (\#FF3399) | D**oo**r, f**o**rce | Orice grafem vocală sau grup de vocale care corespunde în ordinea grafemelor fonemului   |
| /ʊ/ | /ʊ/ | Gradient: Violet (\#7030A0) 70% → Negru 30% | put, book | Orice grafem vocală sau grup de vocale care corespunde în ordinea grafemelor fonemului   |
| /uː/ | /u/ | Violet (\#7030A0) | food, room | Orice grafem vocală sau grup de vocale care corespunde în ordinea grafemelor fonemului   |
| /j/ | /ỷ/ | ỷ Roșu | boy |  |
| /j/ | /ỷ/ | ỉ roșu | Coin, onion | Roșu |
| /aʊ/ | /aw/ | Verde neon (\#23D300) | house, now | Orice grafem vocală sau grup de vocale care corespunde în ordinea grafemelor fonemului   |
| /aʊər/ | /aw/ \+/ər/ | Verde neon (\#23D300) \+ Alb cu chenar negru | Hour, our, sour, dour | Ou+r  \= /aw/ \+/ər/  \= verde neon \+ alb cu chenar negru |
| /aʊər / | /aw/ \+/ə/+/r/ | Verde neon (\#23D300) \+ negru \+negru | Tower, flower | Ou+vocală+row+vocală+r Nu face parte din grupul lexical our și există un grafem vocalic (e) corepsondent lui / ə/ înainte de r /r/.  |
| /əʊ/ | /əw/ | Gradient: \#002B7F → \#FCD116 → \#CE1126 | go, snow | Orice grafem vocală sau grup de vocale care corespunde în ordinea grafemelor fonemului   |
| /əʊər/ | /əw/+/ə/+/r/ | Gradient: \#002B7F → \#FCD116 → \#CE1126 \+ negru | Goer  | există un grafem vocalic (e) corepsondent lui / ə/ înainte de r /r/. |
| /aɪ/ | /aỷ/ | Albastru mediu (\#4472C4) | time, my | Orice grafem vocală sau grup de vocale care corespunde în ordinea grafemelor fonemului   |
| /aɪ/ | /aỷ/+/ər/ | Albastru mediu (\#4472C4) \+r Alb cu chenar negru | Tyre , fire, ire |  |
| /eɪ/ | /eỷ/ | Albastru închis (\#00246C) | name, day | Orice grafem vocală sau grup de vocale care corespunde în ordinea grafemelor fonemului   |
| /juː/ | /ỷu/ | Maro (\#833C0B) | cute, beauty | Orice grafem vocală sau grup de vocale care corespunde în ordinea grafemelor fonemului   |
| /ɔɪ/ | /o/+/ỷ/ | Gradient: o \- Roz (\#FF3399) → ỷ \- Roșu (\#CC0000) | boỷ, coỉn |  |
| /w/ | /w/ | Negru (\#000000) | wet, with |  |
| /w/ | /w/ | Negru (\#000000) ű | q**űeen** |  |
| /iə/  | /i/ \+ /ə/ | Roșu (\#CC0000) \+ Negru (\#000000) | idea | Non lexical set near |
| /iər/ | /i/ \+ /ər/ | Roșu (\#CC0000) \+ r Alb cu chenar negru | Near, interfere | Setul lexical Near |
| /eər/ | /e/ \+ /ər/ | Portocaliu (\#EE5B00) \+ r Alb cu chenar negru | bear, hair | Setul lexical Care/bare/aire |
| /jʊər/ | / ỷu/ \+/ər/ | Maro (\#833C0B) \+ r Alb cu chenar negru | Cure, lure | Cure lexical set |
| /ʊər/ | /ʊ/ \+ /ər/ | Violet (\#7030A0) \+ r Alb cu chenar negru | poor, tour | Poor lexical set |

## **Mai este de modificat câte ceva la algoritm\!\!\!** 

###  **Principii Fundamentale EIC**

1. **Tabelul 1**: Referință pentru definirea unităților C-C2 complexe și aplicarea diacriticelor pe C consumate. Toate **C-C2** sunt tratate conform **Tabelului 1**, indiferent de lungime.  
2. **Silabificarea**: Preluată direct din IPA; ghidează V-V2 și alocarea accentului.

   V–V₂ \= secvență de vocale din aceeași silabă, conform IPA.

**Prioritatea excepțiilor**: V-R Lexical are prioritate absolută asupra tuturor regulilor 

  **Accent Primar**: Se aplică strict **unităților V-V2 din silaba care poartă Accent Principal**.

**Grafemul consonantic mută** este unitate fără fonem (NULL)și este gri,   
Grafemul vocalic este mut, marcat cu gri, dacă nu face parte dintr-un v-v2 cu fonem.   
Grafemul w fără grafem nu este gri dacă este adiacent unei vocale cu fonem în afară de schwa. 

3. 

### **I. BLOCUL DE PREPROCESARE CANONICĂ ȘI SECȚIONARE (I.1–I.5)**

4. **Scop:** Inițializarea Tavei de Lucru cu unități de Consum și metadatele IPA.

| Nr. | Acțiune | Scop și Logica de Secționare |
| ----- | ----- | ----- |
| I.1–I.3 | Input & Meta-Date | Se asigură că Ipa este importată cu silabe și o marchează pe cea accentuată primar. Face transformarea IPA în fonemele EiC corespondente. Aliniază grafemele și fonemele în secvențe C-C1 și V-V1. Separarea etanșă C/V: |
| I.4 | Secționare C-C1 → C-C2 A grafemelorși fonemelor | C-C1: secvență contiguă de consoane (Unitate Etanșă). C-C2: Monografism strict stânga-dreapta, grupând doar grafemele care produc un singur fonem conform Tabelului 1\. Secvențele multiple se descompun în C singulare. |
| I.5 | Secționare V-V1 → V-V2 A grafemelor și fonemelor | V-V1: secvență de vocale din aceeași silabă (conform silabificării IPA). V-V2: Monografism strict stânga-dreapta; se grupează doar dacă formează diftong/triftong unitar. V singulare trec ca unități simple la P7. |

**IV. BLOCUL II – ETICHETARE LINGVISTICĂ (P1–P7)**

Etapele se aplică **în ordine strictă**.

| Ordine |  | Regula | Descriere | Culoare / Marcaj |
| ----- | ----- | ----- | ----- | ----- |
| **P1** |  | **V-R Lexical (Accentuat)** | Rezolvă V+/ər/ în silaba accentuată (ex: *fire*). V→T2, r→Alb/Chenar. |  |
| **P2** |  | **\-ed Final** | Tratează (v-v)*\-ed* morfologic (mut/schwa). e→gri |  |
| **P3** |  |  |  |  |

| C-C & C Monofonemic |
| :---- |

| Consumă toate consoanele (unitare sau grupuri din T1). C→Negru. |  |
| :---- | ----- |
| **P5** |  |

| Consoană Silabică |
| :---- |

| Aplică Alb/Chenar pe c, l, m, n, cu /ə/ anterior fără grafem (ex: *little*) P6 Grafem Mut e final, k mut, gh mut → Gri (\#808080). V. BLOCUL III – CONSUMATOR DE PROPRIETĂȚI VIZUALE Regula Sublinierei: Se subliniază grafemul v-v2 doar dacă: Se află în silaba accentuată primar . Excludere: C-C2 și C-V grafemele gri (mute). Regula colorării V-V2: toată secvenț grafemică V-V2 are aceeași culoare VI. OBSERVAȚII CANONICE Accentul primar se aplică doar pe V-V2 din silaba accentuată.V-V2 are o singură culoare Schwa fără grafem generează efect vizual alb-chenar pentru consoana consumatoare. Grafemul e mut este ∅ (gri), fără fonem. Grafemul w nu devine gri dacă e adiacent unei vocale active ≠ schwa. Silabificarea IPA garantează eliminarea hiatului prin separare fonologică.  |
| :---- |

Prelucrare  
1\. 

1. Analiză grafemică C-C1 și V-V1 (scurt C1, V1) cu numerotarea secvențelor  
2. Analiză fonemică C-C1 și V-V1 (scurt C1, V1, cu numerotarea secvențelor

   Ele corespund numeric 1 cu 1, 2 cu 2 etc. 

3. C-C2 sunt deja clare în IPA (fonemic  
4. Pentru obținerea V-V2 se va aplica silabizarea din IPA

   

5. Transormarea transcrierii IPa în EiC conform tabelelor 1 și 2  
6. Aplicarea Tabelului 2 la secvențele C-C1 grafemice pentru obținerea

Atenție nu coincid\!\!\!

### **ALGORITMUL CANONIC INTEGRAL (EIC) \- VERSIUNEA FINALĂ INTEGRATĂ** {#algoritmul-canonic-integral-(eic)---versiunea-finală-integrată}

**PRINCIPII STRUCTURALE ESENȚIALE**

| Principiu | Cerință Canonică Integrală |
| :---- | :---- |
| **Interdicția C-V** | Absolută. Garantată de **I.3** (Secționare Etanșă). |
| **Nulitate (NULL)** | Proprietate **reziduală** (Grafem Neconsumat). Marcată strict la **P6/P7**. |
| **Semivocale (W/Y)** | ⟨w⟩/⟨y⟩ sunt clasificate strict ca **Vocalic (V)**. |
| **Garanția 100%** | Asigurată de **I.6 (Soluția Editorului)**. |

---

**I. BLOCUL DE PREPROCESARE ȘI STRUCTURĂ (I.1 – I.6)**

*(Scop: Sincronizarea datelor, stabilirea frontierelor C∣V, și definirea Unităților de Consum. Toate grafemele G și fonemele F rămân active. Nulitatea NU se stabilește.)*

| Ordine | Acțiune Canonică Integrală / Etapa | Detaliere a Funcției Integrată | Ieșire / Rezultat |
| :---- | :---- | :---- | :---- |
| **I.1 – I.2** | **Input, Proprietăți & Aliniere Strictă** | **I.1.a:** Primește G și F (IPA, Silabisire, Accent). **I.1.b (Transformare):** Aplică **ipa\_phoneme\_splits** (e.g., /ɪər/ → /ɪ/, /ər/) **potrivit diviziunilor silabice** pentru a obține Fonemele EiC (F). **I.2 Depistarea lui V-R fuzionare forțată artificială, aplicată doar seturilor lexicale near, bear, poor, cure, fire, hour.Blochează** /ər/ din aceste seturi lexicale.  | Hartă G↔F (G și F integral păstrate) |
| **I.3** | **Secționare Etanșă (C−C1​,V−V1​ Genus)** | **SCOP:** Aplicarea interdicției C−V. Algoritmul scanează G și F și **introduce Frontiere** (∣) la fiecare schimbare de *genus*. **Regulă:** ⟨w⟩/⟨y⟩ și Fonemele /w/, /y/ din F sunt tratate ca **V** și forțează o Frontieră C∣V. | Blocuri Etanșe Bk​ (Unități C−C1​ și V−V1​) |
| **I.4** | **Monografism Strict C (→C−C2​)** | **Grupare:** Procesează doar blocurile **C−C1​**. Găsește cea mai lungă secvență C care produce un singur fonem (conform T1 / consonant\_map). **Acțiune:** Grafemele alese devin C−C2​. Grafemele neconsumate din C−C1​ sunt lăsate **active** pe Tavă. | Blocuri Finale C−C2​ (Unități Consumate) |
| **I.5** | **Monografism Strict V (→V−V2​)** | **Grupare:** Procesează doar blocurile **V−V1​** (inclusiv ⟨w⟩,⟨y⟩). Găsește cea mai lungă secvență V care formează diftong/vocală unitară (V−V2​), ghidată de F. **Acțiune:** Grafemele alese devin V−V2​. Grafemele neconsumate sunt lăsate **active** pe Tavă. | Blocuri Finale V−V2​ (Unități Consumate) |
| **I.6** | **Soluția Editorului (Feedback Loop Canonic)** | **SCOP: Garanție 100%.** Dacă I.4/I.5 lasă grafeme *active* neconsumate pe Tavă (eșec de Monografism, ex: V−V−V), se declanșează un *feedback loop* pentru a injecta o soluție I.3 corectă din Dicționarul Canonic. | Toate grafemele non-NULL/non-Excepție sunt consumate. |

Export to Sheets  
---

**II. BLOCUL DE ETICHETARE LINGVISTICĂ ȘI MARCAJ (P1–P7)**

*(Aplică culorile și marcajele. Consumă Unitățile C−C2​ și V−V2​ rămase, și stabilește Nulitatea la final.)*

| Ordine | Regula Canonică Integrală / Etapa | Descriere Detaliată a Funcției Integrată | Consumă & Marcaj |
| :---- | :---- | :---- | :---- |
| **P1** | **V-R Lexical (Greedy)** | **PRIORITATE ABSOLUTĂ.** Consumă Unitățile V−V2​ din setul de excepții **p1\_v\_r\_lexical\_only\_set** (e.g., *fire, dear*). | V→T2 Plina˘/Redusa˘,⟨r⟩→Alb/Chenar (Consumă ambele) |
| **P2** | **C-Excepții Morfologice (-ed)** | Tratează strict morfemul final ⟨ed⟩. Identifică ⟨e⟩ ca mut (NULL) sau Schwa și ⟨d⟩ ca C. | ⟨e⟩→Gri/T2,⟨d⟩→Negru |
| **P3** | **C Monofonemice Standard & W/Y Onset** | Consumă toate blocurile C−C2​ rămase. **Regula W/Y Onset:** ⟨w⟩/⟨y⟩ care formează V−V2​ singular (Onset) primesc marcajul **Negru (\#000000)** (se aplică diacritice din consonant\_map). | **Negru** (cu diacritice T1) |
| **P4** | **V-V Curată (Plină/Reduse/Diftong)** | Consumă toate blocurile V−V2​ rămase. Aplică culorile din **vowel\_map** (inclusiv gradientul) și logica de subliniere pentru accentul primar. | T2 Plina˘/Gradient/Negru |
| **P5** | **C Silabice (Schwa Latent)** | Aplică Alb/Chenar pe C (l, m, n, r) care preiau schwa.  | **Alb cu Chenar Negru** |
| **P6** | **Grafeme Funcțional Mute (V-C-e)** | Rezolvă cazurile de ⟨e⟩ final care modifică calitatea vocalei precedente (e.g., *rate* vs. *rat*). **Acțiune:** ⟨e⟩ primește culoarea gri și  este marcat ca Mute. | Vculoare​ dar is\_mute = True |
| **P7** | **Grafeme Mute Reziduale (NULL / Finalizare)** | **STABILIREA NULITĂȚII:** Orice grafem rămas care nu produce fonem (fonem\_ipa \= None) și nu a fost consumat de P1–P6 **este declarat NULL** și i se aplică marcajul final. | **Gri (\#808080)** |

Export to Sheets  
---

**III. BLOCUL VIZUAL ȘI DE IEȘIRE**

* **III.1. Regula Sublinierii:** Se subliniază strict Unitățile V−V2​ (sau V−R) care poartă **Accent Primar**.  
* **III.2. Regula Culorii Unitare:** Se aplică o singură culoare (derivată din fonemul dominant, conform vowel\_map) pe toate grafemele care compun secvența V−V2​ sau C−C2​.  
* **III.3. Fidelitate EiC:** Păstrează ordinea strictă a grafemelor originale (G), cu toate marcajele, diacriticele și culorile aplicate, gata de afișare.

**Segmentare C-C1 și V-V1:** ???

teacher 

| grafemică | t | ea | ch | e | r |
| :---- | :---- | :---- | :---- | :---- | :---- |
| Fonemic-silabică  |  |  |  |  |  |
|  |  |  |  |  |  |

Segmentare C-C2 și V-V2

| Grafemică (tabelul1) | t | ea | ch | e | r |
| :---- | :---- | :---- | :---- | :---- | :---- |
| Fonemică (cf. silabilor) | **t** | **i:** | **tʃ** | **ə** | **r** |

| Tabel vizualizare (deocamdată se vor introduce manual) |  |  |  |  |  |  |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
| /j/ | /ỷ/ | u | ủ | Roșu |  | Doar în cazul /ɔɪ/	/o/+/ỷ/ |
| /j/ | /ỷ/ | e | ẻ | Roșu |  | Doar în cazul /ɔɪ/	/o/+/ỷ/ |
| /j/ | /ỷ/ | a | ả | Roșu |  | Doar în cazul /ɔɪ/	/o/+/ỷ/ |
| /j/ | /ỷ/ | o | ỏ | Roșu |  | Doar în cazul /ɔɪ/	/o/+/ỷ/ |
| /j/ | /ỷ/ | j | j̉ | Roșu |  |  |

Chestii nelămurite  
\- renunț la w și y ca onset? Ar mări numărul caracterelor compuse la 3\.

Subliniez w și y în poziție de onset?

