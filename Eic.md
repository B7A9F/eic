

**Curățare ipa de (.) și (:)**

def \_normalize\_phonemes(self, ga: str, rp: str) \-\> str: state \= NormalizationState(ga=ga, rp=rp) for rule in self.rules: state \= rule.execute(state) if state.unified: state.ga \= state.rp \= state.unified return state.unified or state.ga

\-Eliminarea marcatorilor de lungime (:) și punctul **(.)**

\-Accentul este înregistrat pasiv pe toate simbolurile vocalice adiacente din întregul grup vocalic de după semnul accentului primar.  
\-alocare calitate calitate V sau C fonemelor și grafemelor utilizate 

Excepție de la prelucrarea întregului

cuvânt:

\-Cuvintele de tip \-Cle se împart în 2 cuvinte, –cle și /əl/  vor face parte din primul cuvânt. 

Ambele cuvinte se prelucrează absolut separat. 

Ex. battlement= battle \+ ment

    / ˈbætəlmənt/    \=  /ˈbætəl/  \+ /mənt/

                           /ˈbætl̩/  \+ /mənt/

Rezultatul se reîntregește la final.

If wh=/=/h/, then it is /w/ and h nu are index

If /ɛ/, then /e/

If /ɑ/ in RP then /a/, then /a/ both in RP and GA

If, in GA /ɪr/ or /ɪɹ/ and in RP /ɪə/, then both in RP and GA /ɪr̩/  
If in GA /er/ or /eɹ/ and in RP /eər/, then both in RP and GA /er̩/  
If in GA /aʊr/ or /aʊɹ/ and in RP /aʊə/, then both in RP and GA /aʊr̩/  
If in GA or RP /ur/, /ʊr/, or /uɹ/, /uɹ/, then both in RP and GA / ur̩/

If in GA /ɝ/ or /ɚ/,  then /ər/ both in RP and GA

If în RP /V/ și în GA /Vr/, Then /Vr/ both in RP and GA /V/=( ɔ, a). 

If /ɔɪ/ (Input), then /oɪ/  n RP și GA). 

If /ɜ/ (Input), Then /ə/ (Output) (în RP și GA).

If în RP /ʌr/, then /ər/ în RP and GA

If /wʌ/, then /wa/

If in RP /ʌ/, then /ʌ/ în RP and GA

If /ɔr/, then /or/ (în GA și RP). 

If /ɔr/, Then /or/ (în GA și RP). 

If în GA /ori\#/, Then /ori\#/ (în RP și GA). 

If in GA /æ/ and in RP /a/, Then /æ/ (în GA și RP).

If in RP /ɒ/ sau /ɔ/, then /ɒ/ (în GA și RP).

If GA /-eri\#/, then /-eəri\#/ (in RP și GA). If GA /-əri\#/, Then /-əri\#/ (în RP și GA).

If /oʊ/ sau /əʊ/, Then /əʊ/ (în RP și GA).

If /-ləs\#/ or /-les\#/ in GA, then /-les\#/.

If /-ment\#/ and /-ment\#/, then /-mənt\#/ in GA and RP.

If /fəl\#/, /-ful\#/, /-fʊl\#/, then /fəl\#/ in GA and RP.

If /-əbəl\#/, /-ɪbəl\#/, then /-əbəl\#/ in GA and RP.

If /–əti\#/, /–iti\#/ or /ɪti\#/, then /-iti\#/.

If /tʃ/, then /ʧ/. If /dʒ/, then /ʤ/.

Simplificare /j/ to /ỷ/ 

If /Vɪ/, then /Vỷ/ 

If /Vʊ/, then /Vw/ 

If /ɪV/, then /iV/

If \-Cle /əl/, then /-l̩/

(C=b, c, d, f, g, j, k, l, m, n, p, q, r, s, t, v, x, z)

If –‘nt /- ənt\#/, then /-n̩t\#/

If –‘l /əl/, then /-l̩\#/

If mc-, /\#mək-/, then /\#mk̩-/

If –sm, /zəm\#/, then /zəm̩\#/

if –thm, /ðəm\#/, then zəm̩\#/

If \-C‘d /əd/, then /-d̦\#/

If \-‘re  /ər/, then /-ŗ\#/

**Tokenizare**

Tabel1 – foneme consonantice

| Intrare (simbol consonantic EiC) | /b/	 | /d/	 | /f/	 | /g/	 | /h/	 | /k/	 | /l/	 | /m/	 | /n/	 | /p/	 | /r/	 | /s/	 |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| Ieșire (Unitate Atomică  consonantică EiC) | \[b\] | \[d\] | \[f\] | \[g\] | \[h\] | \[k\] | \[l\] | \[m\] | \[n\] | \[p\] | \[r\] | \[s\] |

| Intrare (simbol consonantic EiC) | /l̩/   | /n̩  | /k̩/  | /m̩/ | /ŗ | /d̦/ | /t/	 | /v/	 | /z/	 | /x/	 |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| Ieșire (Unitate Atomică consonantică EiC) | \[l̩\]   | \[n̩\]  | \[k̩\]  | \[m̩\] | \[ŗ\] | \[d̦\] | \[t\] | \[v\] | \[z\] | \[x\] |

| Intrare (simbol consonantic EiC) | /ʤ/ | /tʃ/	 | /ʃ/	 | /ʒ/	 | /θ/	 | /ð/	 | /ŋ/	 | /ŋg/	 | /gz/	  | /ks/	  | /ksh/ |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| Ieșire (Unitate Atomică consonantică EiC) | \[j\] | \[ch\] | \[sh\] | \[zh\] | \[th\] | \[dh\] | \[ŋ\] | \[ŋg\] | \[gz\] | \[ks\] | **\[ksh\]** |

	

| Tabel 2b – foneme vocalice |  |  |
| :---- | :---- | :---- |
| de intrare (simbol  vocalic EiC) | Vocale depline | /a/, /ʌ/, /æ/, /e/, /i/, /ɪ/, /ɒ/, /ʊ/, /u/, /ə/, /o/.  |
|  | Semivocale (V\_S1 , V\_S2 ) |         	 /w/, / ỷ / |
| de ieșire (Unitate  vocalică Atomică EiC) | vocale simple \[V\_V\] | \[a\], \[ʌ\], \[æ\], \[e\], \[i\], \[ɪ\], \[ɒ\], \[ʊ\], \[u\], \[ə\], \[o\],  |
|  | Vocale compuse tip1  \[V\_S1 \+ V\_V\] | \[ỷa\], \[ỷæ\], \[ỷe\], \[ỷi\], \[ỷɪ\], \[ỷɒ\], \[ỷo\], \[ỷu\], \[ỷə\] \[wa\], \[wæ\], \[we\], \[wi\], \[wɪ\], \[wɒ\], \[wo\], \[wʊ\], \[wu\], \[wə\] |
|  | Vocale compuse tip2 \[V\_V \+ V\_S2\]  | \[aỷ\], \[oỷ\], \[əw\],\[aw\]	 \[eỷ\]	 |
|  | Vocale compuse tip3  \[V\_S1 \+ V\_V \+ V\_S2\] | \[waỷ\], \[waw\], \[weỷ\], \[woỷ\], \[wəw\] \[ỷaỷ\], \[ỷaw\], \[ỷeỷ\], \[ỷoy\], \[ỷəw\] |
|  |  |  |

| Tabel 3 – grafeme consonantice |  |
| :---- | :---- |
| de input consonantic  | b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, x, z ç, ñ  |
| de output (Unitate  Atomică  Consonantică EiC) | \[b\], \[c\], \[d\], \[f\], \[g\], \[h\], \[j\], \[k\], \[l\], \[m\], \[n\], \[p\], \[q\], \[r\], \[s\], \[t\], \[v\], \[x\], \[z\],      \[ç\], \[ñ\]  |

| Tabel 4 – grafeme vocalice |  |
| :---- | :---- |
| de intrare  (simbol grafemic vocalic EiC) | a, e, i, o, u, y, w,     é, í, *à, è,* ù, *ä,* *ë, ö,* *ü,* ï, *â, ê, ô,* è, ā, ē, ū, ŏ, ã, õ  |
| de ieșire  (Unitate  Atomică vocalică EiC) | \[a, \[e, \[i, \[o, \[u, \[ỷ, \[y, \[w\], \[ű\]   \[é\], \[í\], \[à\], \[è\], \[ù\], \[ä\], \[ë\], \[ö\], \[ü\], ï, \[â\], \[ê\], \[ô\], \[è\], \[ā\], \[ē\], \[ū\], \[ŏ\], \[ã\], \[õ\] |

BII

**I. Fundamentul Teoretic (Axiome)**

Pentru a asigura un determinism de O(n), sistemul elimină orice formă de căutare recursivă, bazându-se pe trei piloni:

1. **Exclusivitate Secvențială:** Decizia este locală (la indexul i). Fără backtracking.  
2. **Omogenitate Absolută:** Maparea este un act binar de tipologie: C \\leftrightarrow C sau V \\leftrightarrow V. Utilizată și la reindexare/reajustare  
3. **Ordin Numeric Inviolabil:** Fluxul este unidirecțional, de la stânga la dreapta.

---

**II. Arhitectura Datelor (Input din Blocul I)**

Programul primește două șiruri de unități atomice (UA):

* **UA\_G (Grafemic):** Literele cuvântului, etichetate individual ca C sau V.  
* **UA\_F (Fonemic):** Fonemele IPA normalizate (Standardul EiC), etichetate ca C sau V.

---

**III. Etapa 1: Formarea Secvențelor (B2.1)**

Înainte de aliniere, atomii sunt fuzionați în **Unități de Execuție (UE)** pe baza regulii de omogenitate:

* **Formarea UEG (Grafemic):** Gruparea caracterelor adiacente de același tip.  
  * *Exemplu:* t-h-o-u-g-h-t-s \\rightarrow th (C), ou (V), ghts (C).  
* **Formarea UEF (Fonemic):** Gruparea fonemelor adiacente de același tip.  
  * *Exemplu:* \[th\] (C), \[ɒ\] (V), \[ts\] (C).  
* **Indexare:** Fiecare grup primește un index numeric strict: UEG\_1, UEG\_2... și UEF\_1, UEF\_2....

---

**IV. Etapa 2: Mecanismul de Aliniere (USS \- B2.2)**

Motorul parcurge indicii liniar și execută următoarea logică binară la fiecare pas i:

**Pasul 1: Maparea Normală**

Se verifică tipologia:

if Type(UEF\[i\]) \== Type(UEG\[i\]):

ACȚIUNE: Mapare Reușită. Ambii indici avansează la i+1.

**Pasul 2: Detectarea Eșecului și Activarea CUS (B2.3)**

Dacă tipurile nu coincid, se activează singura regulă de rezoluție a crizei:

Condiția Unică Supremă (CUS):

if Mapping\_Failed AND UEF\[i\] \== V AND UEG\[i\] \== C:

ACȚIUNE:

1. UEG\[i\] este marcat ca **Sărit (Mut)**.  
2. Indexul UEF\[i\] rămâne pe loc.  
3. Se re-evaluează maparea cu UEG\[i+1\].

---

**V. Etapa 3: Finalizarea și Reindexarea**

După parcurgerea întregului șir:

1. **Reajustare:** Se validează că toate perechile rămase respectă C-C și V-V.  
2. **Identificarea Mutului Structural:** Orice UEG care a rămas fără corespondent UEF (în urma CUS sau a consumului incomplet) este etichetat oficial ca **Mut Structural și nu mai este indexat și nu mai intră în calcul absolut deloc**.  
3. **Output pentru Blocul III:** Perechile aliniate sunt trimise către motorul de colorare.

---

**VI. Proprietăți și Performanță**

| Atribut | Valoare | Explicație |
| :---- | :---- | :---- |
| **Complexitate** | O(n) | Procesare liniară, o singură trecere. |
| **Determinism** | 100% | Aceleași date de intrare produc mereu același rezultat. |
| **Backtracking** | 0 | Nu se întoarce niciodată la indicii anteriori. |
| **Erori tipologice** | Rezolvate de CUS | Gestionează literele mute "invizibile" fonetic. |

---

**VII. Rezumat Executiv pentru Programator**

1. **Grupare:** Rulează group\_by\_type() pe grafeme și foneme.  
2. **USS Loop:** Rulează match(UEG\[i\], UEF\[i\]).  
3. **CUS Trigger:** Dacă ai V fonetic vs C grafic, "aruncă" C-ul grafic în categoria Mut și mergi mai departe.  
4. **Seal:** Închide cuvântul și marchează resturile neconsumate.

   

**BIII**

**\- grafem mut din oficiu**

* **e din –ed** morfologic final ulterior unei vocale: vocală/semivocală-ed, ex:cooed (idee: și aici poate fi separator y: stayed)  
* **e** din **–we** final: ex. stowe (idee: și aci poate fi separator)

**\-consumul are loc în perechile UEF și UEG după index și tipologie C-C sau V-V)**

**\-fonemul alege varianta cea mai lungă, adică cât mai multe grafeme (monografism lacom)**

Grafemul fără fonem devine mut 

| Token EiC | Consumă grafemele | Aplică modificarea | Culoare | Exemple Lexicale de rezultat final EiC |
| :---- | :---- | :---- | :---- | :---- |
| \[b\]  | b | b | Negru (\#000000) | bat, beautiful |
|  | bb | bb | Negru (\#000000) | rabbit, rubber |
| \[d\]  | d | d | Negru (\#000000) | d**o**g |
|  | dd | dd | Negru (\#000000) | address |
| \[j\]  | j | j | Negru (\#000000) | jam |
|  | g | ğ | Negru (\#000000) | barğe |
|  | gg | ğğ | Negru (\#000000) | veğğieṡ |
|  | dg | dğ | Negru (\#000000) | bridğe |
|  | dj | dj | Negru (\#000000) | adjust |
| \[g\]  | g | g | Negru (\#000000) | good, go |
|  | gg | gg | Negru (\#000000) | egg |
|   \[f\] | f | f | Negru (\#000000) | fun, funny |
|  | ff | ff | Negru (\#000000) | off |
|  | ph | ph | Negru (\#000000) | phone, graph |
|  | gh | gh | Negru (\#000000) | **e**nough |
| \[h\] | h | h | Negru (\#000000) | hat, he |
| \[x\] | h | h | Negru (\#000000) | loch |
|  \[ch\] | ch | ch | Negru (\#000000) | chair, church |
|  | tch | tch | Negru (\#000000) | watch |
|  | c | c̈ | Negru (\#000000) | c̈ello |
|  | t | ẗ | Negru (\#000000) | S**i**ẗuation, culẗure,staẗue |
| \[k\]  | kk | kk | Negru (\#000000) | bookkeeping |
|  | k | k | Negru (\#000000) | k**i**ng |
|  | c | c | Negru (\#000000) | cat |
|  | cc | cc | Negru (\#000000) | accommodate |
|  | ck | ck | Negru (\#000000) | black |
|  | cq | cq | Negru (\#000000) | acquaintant |
|  | q | q | Negru (\#000000) | queen |
| \[l\]  | l | l | Negru (\#000000) | leg |
|  | ll | ll | Negru (\#000000) | fall |
| \[m\]  | m | m | Negru (\#000000) | man |
|  | mm | mm | Negru (\#000000) | summer |
| \[n\]  | n | n | Negru (\#000000) | net |
|  | nn | nn | Negru (\#000000) | funny |
| \[ŋ\] | ng | ng | Negru (\#000000) | s**i**ng |
|  | n | n | Negru (\#000000) | Bank, tank, uncle, funct̂ion |
| \[ŋg\] | ng | ng | Negru (\#000000) | congress |
| \[p\]  | p | p | Negru (\#000000) | pen, pronunciation |
|  | pp | pp | Negru (\#000000) | happy |
| \[r\]  | r | r | Negru (\#000000) | red |
|  | rr | rr | Negru (\#000000) | berry |
|  \[s\] | s | s | Negru (\#000000) | sun, success |
|  | ss | ss | Negru (\#000000) | success |
|  | sc | sƈ | Negru (\#000000) |  |
|  | c | ƈ | Negru (\#000000) | ƈircus |
|  | cc | ƈƈ | Negru (\#000000) | sucƈess |
|  \[sh\]  | sh | sh | Negru (\#000000) | she, fish |
|  | c | ĉ | Negru (\#000000) | oĉean |
|  | cĥ | ĉĥ | Negru (\#000000) | ĉĥef |
|  | s | ŝ | Negru (\#000000) | ŝure |
|  | ss | ŝŝ | Negru (\#000000 | miŝŝion |
|  | sch | ŝĉĥ | Negru (\#000000) | b**o**rŝĉĥ |
|  | sc | ŝĉ | Negru (\#000000) | fascism |
|  | t | t̂ | Negru (\#000000) | nat̂ion |
|  \[t\] | t | t | Negru (\#000000) | t**o**p |
|  | tt | tt | Negru (\#000000) | letter |
| \[th\] | th | tɦ | Negru (\#000000) | th**i**n, th**i**nk |
| \[dh\] | th | th | Negru (\#000000) | th**i**s, father |
| \[v\]  | v | v | Negru (\#000000) | van, vote |
|  | ph | ph | Negru (\#000000) | Stephen |
|  | f | ᵮ | Negru (\#000000) | oᵮ |
| \[z/ | z | z | Negru (\#000000) | zoo |
| \[z\]  | zz | zz | Negru (\#000000) | fizz |
|  | s | ṡ | Negru (\#000000) | roṡe |
|  | sc | ṡƈ | Negru (\#000000) | crescent |
|  | x | ẋ | Negru (\#000000) | ẋylophone |
|  \[zh\] | s | š | Negru (\#000000) | višion, meašure  tel**e**v**i**šion |
|  | g | ǧ | Negru (\#000000) | m**i**raǧe |
| \[gz\] | x | ӿ | Negru (\#000000) | **e**xample |
| \[ks\] | x ks | x | Negru (\#000000) | sex |
| \[ksh\] | x | x̄ | Negru (\#000000) | sex̄ual |
| \[l̩\]   | l ll | l ll | Alb cu chenar negru |  |
| \[n̩\] | n nn | n nn  | Alb cu chenar negru |  |
| \[m̩\] | m mm | m mm | Alb cu chenar negru |  |
| \[k̩\] | c ck cc kk | c ck cc kk | Alb cu chenar negru |  |
| \[ŗ\] | r | r | Alb cu chenar negru |  |
| \[d̦\] | d | d | Alb cu chenar negru |  |

| Tabel 2   |  |  |
| :---- | :---- | :---- |
| UA fonemic vocalic EiC | Culoare-atribut pe care îl are și îl aplcă oricărui care îi corespunde | Exemple engleză |
| **/æ**/ | Albastru deschis (\#00b0f0) | **a**pple, c**a**t |
| /ʌ/ | Gradient: Verde închis (\#008E40) 70% → Negru 30% | s**o**n, c**u**p |
| /**a**/ | Verde închis (\#008E40) | c**a**r, f**a**ther |
| /**ə**/ | Negru (\#000000) | about, taken |
| /**e**/ | Portocaliu (\#EE5B00) | b**e**d, h**ea**d |
| /**ɪ**/ | Gradient: Roșu (\#CC0000) 70% → Negru 30% | s**i**t, t**i**p |
| \[i\] | Roșu (\#CC0000) | s**ee**, m**ea**n |
| \[ɒ\] | Gradient: Roz (\#FF3399) 70% → Negru 30% | h**o**t, wh**a**t, l**aw**n, c**au**ght |
| \[**o**\] | Roz (\#FF3399) | D**oo**r, f**o**rce |
| \[**ʊ**\] | Gradient: Violet (\#7030A0) 70% → Negru 30% | put, book |
| \[**u**\] | Violet (\#7030A0) | food, room |
|  |  |  |
|  |  |  |
| \[əw\] | Gradient: \#002B7F → \#FCD116 → \#CE1126 | go, snow |
| \[**aỷ**\] | Albastru mediu (\#4472C4) | time, my |
| \[eỷ\] | Albastru închis (\#00246C) | name, day |
| \[aw\] | Verde neon (\#23D300) |  |
| \[o+ỷ\] | Gradient: o \- Roz (\#FF3399) → ỷ \- Roșu (\#CC0000) | boỷ, coỉn |
|  |  |  |
| \[ỷ+u\] | If no uag \[y\] or \[i\] for ỷ Maro (\#833C0B) | cute, beauty |
|  | If uag \[y\] or \[i\] for ỷ  Gradient: ỷ \- roșu (\#CC0000) → restul uag \- Violet (\#7030A0) |  |
| \[ỷ+a\] | If uag \[y\] or \[i\] for ỷ   Gradient: ỷ \- roșu (\#CC0000) → a \- Verde închis (\#008E40)  |  |
| \[ỷ+æ\] | If uag \[y\] or \[i\] for ỷ  Gradient: ỷ \- roșu (\#CC0000) → restul uag \- Albastru deschis (\#00b0f0) |  |
| \[ỷ+e\] | If uag \[y\] or \[i\] for ỷ  Gradient: ỷ \- roșu (\#CC0000) → restul uag \- Portocaliu (\#EE5B00) |  |
| \[ỷi\] | If uag \[y\] for ỷ  Gradient: ỷ/ỉ \- roșu (\#CC0000) → restul uag \- roșu (\#CC0000) |  |
| \[ỷɪ\] | If uag \[y\] for ỷ  Gradient: ỷ \- roșu (\#CC0000) → restul uag \- Gradient: Roșu (\#CC0000) 70% → Negru 30% |  |
| \[ỷɒ\] | If uag \[y\] for ỷ  Gradient: ỷ \- roșu (\#CC0000) → restul uag \- Gradient: Roz (\#FF3399) 70% → Negru 30% |  |
| \[ỷo\] | If uag \[y\] or \[i\] for ỷ  Gradient: ỷ/ỉ \- roșu (\#CC0000) → restul uag \- Roz (\#FF3399) |  |
| \[ỷə\] | If uag \[y\] or \[i\] for uaf \[ỷ\] Gradient: ỷ \- roșu (\#CC0000) → restul uag \- Negru (\#000000) |  |
| \[wa\]  | If uag \[w\] or \[u\] for uaf \[w\] Gradient: w/ ű \- Negru (\#000000) → restul uag \-  \- Verde închis (\#008E40) |  |
|  | If no \[w\] or \[u\] for uaf \[w\] Tradient: negru –galben-negru |  |
| \[wæ\]  | If uag \[w\] or \[u\] for uaf \[w\] Gradient w/ ű \- Negru (\#000000) → restul uag \- Albastru deschis (\#00b0f0) |  |
| \[we\]  | If uag \[w\] or \[u\] for uaf \[w\] Gradient w/ ű \- Negru (\#000000) → restul uag \- Portocaliu (\#EE5B00) |  |
| \[wi\]  | If uag \[w\] or \[u\] for uaf \[w\] Gradient w/ ű \- Negru (\#000000) → roșu (\#CC0000) |  |
| \[wɪ\]  | If uag \[w\] or \[u\] for uaf \[w\] Gradient w/ ű \- Negru (\#000000) → restul uag \- Gradient: Roșu (\#CC0000) 70% → Negru 30% |  |
| \[wɒ\]  | If uag \[w\] or \[u\] for uaf \[w\] Gradient w/ ű \- Negru (\#000000) → restul uag \- |  |
| \[wo\]  | If uag \[w\] or \[u\] for uaf \[w\] Gradient w/ ű \- Negru (\#000000) → restul uag \- |  |
| \[wʊ\]  | If uag \[w\] or \[u\] for uaf \[w\] Gradient w/ ű \- Negru (\#000000) → restul uag \-  \- Gradient Violet → Negru |  |
| \[wu\]  | If uag \[w\] or \[u\] for uaf \[w\] Gradient w/ ű \- Negru (\#000000) → restul uag \-  \- Violet (\#7030A0) |  |
| \[wə\] | If uag \[w\] or \[u\] for uaf \[w\] Gradient w/ ű \- Negru (\#000000) → restul uag \- negru |  |

| Token UA Fonemic | Mecanism Gradient de Culoare |
| :---- | :---- |
| **\[waỷ\]** | **Negru** (\#000000) → **Verde închis** (\#008E40) → **Roșu** (\#CC0000) |
| **\[waw\]** | **Negru** (\#000000) → **Verde închis** (\#008E40) → **Negru** (\#000000) |
| **\[weỷ\]** | **Negru** (\#000000) → **Portocaliu** (\#EE5B00) → **Roșu** (\#CC0000) |
| **\[woỷ\]** | **Negru** (\#000000) → **Roz** (\#FF3399) → **Roșu** (\#CC0000) |
| **\[wəw\]** | **Negru** (\#000000) → **Negru** (\#000000) → **Negru** (\#000000) |
| **\[ỷaỷ\]** | **Roșu** (\#CC0000) → **Verde închis** (\#008E40) → **Roșu** (\#CC0000) |
| **\[ỷaw\]** | **Roșu** (\#CC0000) → **Verde închis** (\#008E40) → **Negru** (\#000000) |
| **\[ỷeỷ\]** | **Roșu** (\#CC0000) → **Portocaliu** (\#EE5B00) → **Roșu** (\#CC0000) |
| **\[ỷoy\]** | **Roșu** (\#CC0000) → **Roz** (\#FF3399) → **Roșu** (\#CC0000) |
| **\[ỷəw\]** | **Roșu** (\#CC0000) → **Negru** (\#000000) → **Negru** (\#000000) |

