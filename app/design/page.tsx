import styles from "./page.module.css";
import Image from "next/image";
import treasureBoxImage from "./treasure-box.png";

export default function DesignDoc() {
  return (
    <main className={styles.container}>
      {/* Header Section */}
      <section className={styles.header}>
        <div className={styles.logo}>
          <Image 
            src={treasureBoxImage}
            alt="תיבת אוצר" 
            width={700} 
            height={700}
            className={styles.logoIcon}
          />
          <div className={styles.logoText}>תיבת אוצר</div>
        </div>
        <div className={styles.tagline}>הכל בתיבה</div>
      </section>

      {/* Product Section */}
      <section className={styles.section}>
        <div className={styles.redBox}>
        <h2 className={styles.redBoxTitle}> המוצר</h2>
        </div>
        <div className={styles.content}>
          <p className={styles.paragraph}>
            <strong>האפליקציה מאפשרת לאמנים, אוצרים וצוות לוגיסטיקה לתקשר ולשתף פעולה בצורה ישירה ומהירה,
               בלי מיילים, טפסים או ניירת.
               <br/>
במקום שכל צד יעביר קבצים, אישורים ומידע בנפרד - הכול קורה באפליקציה אחת.</strong>
          </p>
          <p className={styles.paragraph}>
            <strong>
          תהליך הקמת תערוכה במוזיאון כרוך בהרבה בירוקרטיה. 
          </strong> 
          <br/>
          איסוף של מידע על יצירות, הקצאת חללים ותיאום שינוע של יצירות יוצרים כאבי ראש עבור צוות המוזיאון
          ואנשים שעובדים בשיתוף פעולה איתו.
          מטרת המוצר היא למנוע את הסיבוכים באמצעות ממשק מהיר לשיתוף ותיאום כל המידע.
          </p>
        </div>
      </section>

  
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>◈ קהל יעד ושימוש</h2>

        <div className={styles.content}>
          <p className={styles.paragraph}>
            <strong>קהל היעד הוא עובדי מוזיאון ישראל ואמנים שמשתפים איתם פעולה.
              </strong>
              <br/>
              המוצר ישמש אנשי צוות מהמוזיאון במגוון רחב של תפקידים,
               ביניהם אוצרות ואוצרים, אחראי שימור, צוות לוגיסטי וצוות משפטי.
              <br/>
              <br/>
               לכל בעל.ת תפקיד יהיו הרשאות וגישות שונות, 
               בהתאם לתחום אחריותם, 
               זאת על מנת לצמצם את חוויית המשתמש למינימום האפשרי ולמקסם נוחות. 
              <br/>
              <br/>
               עיקר השימוש במוצר יהיה במשרד,
                אך יש חשיבות לגרסה למובייל לטובת עבודה בימים מרובי נסיעות (אוצרים וצוות לוגיסטי
                ).  הממשק יצטרך להיות פשוט לשימוש, ומתאים למשתמשים בעלי רמות אורינות שונות.
          </p>
        </div>
      </section>
 
      {/* What We Are Building Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>◈ מה אנחנו בונים?</h2>
        <div className={styles.content}>
          <p className={styles.paragraph}>
          <strong>
          תיבת אוצר היא ממשק אשר מאגד את כל המידע והטפסים אשר נדרשים לשינוע של יצירות אומנות במוזיאון.
          </strong> 
          <br/>
        לכל יצירה יש פרופיל בו מופיע כל המידע הנדרש למשלוח שלה אל חלל התערוכה.
        <br/>
        לאוצרים יש אופציה לפתוח ״קבוצה״ בה הוא מבקש רשימה של יצירות הרלוונטיות לתערוכה שהוא מקים. 
        הוא ממלא את פרטי החדר הספציפי בו מתקיימת התערוכה והתיבה עושה בשבילו את העבודה הבירוקרטיות.
        <br/>
        לעובדי המוזיאון מהמחלקות השונות גישה למילוי, עדכון וצפייה במסמכים לפי הצורך, על מנת לייצר מערכת שקופה ויעילה מרגע הקמת התערוכה ועד נעילתה. 
          </p> 
        </div>
      </section>



      {/* What We Are NOT Building Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>◈ מה אנחנו לא בונים?</h2>
        <div className={styles.content}>
          <ul className={styles.list}>
            <li>לא פלטפורמה לציבור הרחב </li>
            <li>לא מקום למכור יצירות</li>
            <li>לא רשת חברתית לאמנים</li>
          </ul>
        </div>
      </section>

      {/* Content and Knowledge Section */}
      <section className={styles.section}>
          <h2 className={styles.sectionTitle}>◈ תוכן ומידע</h2>
        <div className={styles.content}>
          <p className={styles.paragraph}>
            <strong>
          האפליקציה אוספת, שומרת ומצליבה את כלל הנתונים הנדרשים להובלה, אחסון והצגה של יצירות אמנות
          </strong>
          </p>


                  <div className={styles.categoryBox}>
          
          <div className={styles.column}>
            <h3>נתוני יצירה</h3>
            <ul className={styles.list}>
              <li>גורם מחזיק</li>
              <li>מיקום נוכחי</li>
              <li>חומר/מדיום</li>
              <li>מידות</li>
              <li>מצב שימור נוכחי</li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3>נתוני יעד</h3>
            <ul className={styles.list}>
              <li>מוסד מקבל</li>
              <li>חלל תצוגה</li>
              <li>תאריכי תערוכה</li>
              <li>איש קשר אחראי מטעם המוסד</li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3>טפסים ומסמכים</h3>
            <ul className={styles.list}>
              <li>תעודת ביטוח</li>
              <li>אישור שינוע</li>
              <li>חוזה השאלה</li>
              <li>אישור זכויות יוצרים והצגה</li>
            </ul>
          </div>

        </div>


          <p className={styles.paragraph}>
            <strong>
          את המידע על היצירות צוות המוזיאון או האמנים ימלאו בעצמם באפליקציה.
           את המידע על תערוכות כל אוצר יזין בעת הקמתה.
          </strong> 
          </p>
          
          <p className={styles.paragraph}>
             <strong>
          הנתונים במערכת הם דינמיים - 
          </strong> 
            אמנים מעלים יצירות חדשות ומסירים יצירות שנמכרו, אוצרים מעלים תערוכות חדשות ובקשות מתעדכנות לעיתים קרובות.
             האפליקציה מאפשרת עריכה ועדכון של התוכן דרך ממשק פנימי פשוט.
          </p>

          <p className={styles.paragraph}>
            <strong>
          כל המידע נשמר בענן מאובטח, חשוב להקפיד על שמירת המידע בפרטיות.
          </strong> 
שם היצירה ותיאור קצר שלה יהיו חשופים לכולם.           
           </p>
        </div>
      </section>

    {/* Visual Language Section */}
<section className={styles.section}>
  <div className={styles.redBox}>
    <h2 className={styles.redBoxTitle}>שפה עיצובית</h2>
  </div>

  <h2 className={styles.sectionTitle}>◈ שפה גרפית</h2>

  <div className={styles.categoryBox}>

  <div className={styles.column}>
    <h3>צבעוניות</h3>
    <ul className={styles.list}>
      <li>לבן - רקע (65%)</li>
      <li>אדום - כפתורים ואקסנטים (20%)</li>
      <li>שחור - טקסט (15%)</li>
    </ul>
    <p>מינימליזם צבעוני, דגש על חווית משתמש פשוטה</p>
  </div>

  <div className={styles.column}>
    <h3>פונטים</h3>
    <ul className={styles.list}>
      <li>NarkissBlock Bold</li>
      <li>TheBasics Bold</li>
      <li>TheBasics Regular</li>
    </ul>
    <p>פונטים סנסריפים נקיים, שקיימים כבר במערכת הגרפית של מוזיאון ישראל</p>
  </div>

  <div className={styles.column}>
    <h3>שפה גרפית</h3>
    <ul className={styles.list}>
      <li>תמונות - עבור תמונות פרופיל של אנשי צוות ותמונות יצירה</li>
      <li>אייקונים - אייקונים פשוטים לתיקיות השונות וביצוע פעולות</li>
    </ul>
  </div>
</div>
</section>


      {/* Technology Big Title */}
      <section className={styles.section}>
        <div className={styles.redBox}>
          <h2 className={styles.redBoxTitle}>טכנולוגיה</h2>
        </div>

        <h2 className={styles.sectionTitle}>◈ דאטה</h2>

        <div className={styles.content}>
          <ul className={styles.list}>
            <li>משתמשים (אמנים, אוצרים וכו׳)</li>
            <li>יצירות (מידע בסיסי על היצירה + תמונות)</li>
            <li>קבוצות בחירה (כוללות אוסף דרישות של האוצר)</li>
            <li>תערוכות (נושא, תאריכים, רשימת יצירות)</li>
            <li>בקשות להשאלת יצירה (עם סטטוס התקדמות)</li>
            <li>מסמכים רלוונטיים נלווים (הסכמים, ביטוח וכו׳)</li>
          </ul>
        </div>
      </section>

            {/* Entities Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>◈ ישויות</h2>

          <div className={styles.categoryBox}>

          <div className={styles.column}>
            <h3>ArtPiece (יצירה) </h3>
            <ul className={styles.list}>
              <li> artPieceId - מספר מזהה ייחודי: int</li>
              <li>name - שם של היצירה: string</li>
              <li>artistName - שם האמן : string</li>
              <li>curatorId - מזהה האוצר :User </li>
              <li>description - תיאור קצר על היצירה :string</li>
              <li>category - קטגוריה אמנותית (פסל, ציור, צילום, מיצב וכו׳)</li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3>Exhibition (תערוכה)</h3>
            <ul className={styles.list}>
              <li>exhibitionId -  מזהה ייחודי: int</li>
              <li>curatorId - מזהה האוצר : User</li>
              <li>title - שם התערוכה : string</li>
              <li>date - תאריכי פתיחה וסיום : timestamp</li>
              <li>venue - מקום התערוכה : string</li>
              <li>pieces - מערך של id&apos;s של יצירות משתתפות</li>
              <li>notification (התראה)</li>
              <li>notificationId - מזהה ייחודי: int</li>
              <li>userId- מזהה המשתמש שאליו נשלחה ההתראה: int</li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3>User (משתמש)</h3>
            <ul className={styles.list}>
              <li>userId - מספר מזהה ייחודי :int</li>
              <li>userType - סוג משתמש (אמן/אוצר/אספן) :string</li>
              <li>name - שם מלא :string</li>
              <li>password - סיסמה :string</li>
              <li>email - אימייל :string</li>
              <li>organization - גוף רלוונטי (מוזיאון/ עצמאי/גלריה) </li>
              <li>profileDescription - תיאור משתמש :string</li>
              <li>preferences - תחומי עניין :string</li>
            </ul>
          </div>
        </div>

        

        
        
        <p className={styles.paragraph}>
             <strong>
         נצטרך לממש אלגוריתם שלאחר ביצוע ההעברה משייך באופן זמני בלבד יצירות לתערוכות.
          </strong> 
           עלינו למנוע התנגשויות בהזמנת יצירות בתאריכים חופפים ונעילה לזמן מוגדר של אפשרות הזמנת היצירה. 
           כמו כן, נצטרך לממש מנגנון חיפוש שמאפשר לאוצרים לאתר יצירות לפי שם, אמן, קטגוריה או מילות מפתח. 
           כולל סינון לפי זמינות, גודל, נושא ותאריכים רלוונטיים לתערוכה.
          </p>
      </section>
      

            {/* Limitations, Issues and Concerns Section */}
      <section className={styles.section}>
        <div className={styles.redBox}>
          <h2 className={styles.redBoxTitle}>מגבלות, בעיות וחששות</h2>
        </div>

        <h2 className={styles.sectionTitle}>◈ דרישות ומגבלות טכניות</h2>
        <div className={styles.content}>
          <ul className={styles.list}>
            <li>יש צורך באחסון מאובטח לענן עבור תמונות, טפסים ומסמכים רגישים.</li>
            <li>חשוב לשמור על נגישות גבוהה גם למשתמשים פחות טכנולוגיים.</li>
            <li>יש לוודא שמירה על פרטיות וזכויות יוצרים של אמנים ויצירות.</li>
            <li>נדרש תכנון טוב של מבנה הנתונים כדי שהמערכת תישאר מהירה גם עם מאגר גדול של יצירות.</li>
          </ul>
        </div>

        <h2 className={styles.sectionTitle}>◈ בעיות</h2>
        <div className={styles.content}>
          <ul className={styles.list}>
            <li>קושי בהטמעה</li>
            <li>חוסר התאמה למידע קיים</li>
            <li>תקופה ארוכה של הזנה וסידור של נתונים</li>
          </ul>
        </div>

        <h2 className={styles.sectionTitle}>◈ חששות</h2>
        <div className={styles.content}>
          <ul className={styles.list}>
            <li>חוסר שימוש ביצירות אשר לא יהיו במאגר</li>
            <li>עוקץ אופציונלי של יצירות יקרות ערך</li>
            <li>קהל משתמשים מבוגר אשר לא מורגל בחידושים טכנולוגיים</li>
          </ul>
        </div>
      </section>

            {/* Thank You Section */}
      <section className={styles.thanksSection}>
        <div className={styles.redBox}>
          <h2 className={styles.redBoxTitle}>תודות</h2>
        </div>

         <div className={styles.categoryBox}>
            
          <div className={styles.column}>
            <h3>צוות פיתוח</h3>
            <ul className={styles.list}>
              <li> אוריה נצר</li>
              <li>תמר גזית</li>
              <li>נמרוד שגב</li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3>צוות עיצוב</h3>
            <ul className={styles.list}>
              <li>נטע זינו</li>
              <li>אילן פריאל</li>
              <li>דניאל קרמש</li>
              <li>טל ארבל</li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3>הנחייה</h3>
            <ul className={styles.list}>
              <li>עומר זיו</li>
              <li>עלמה נאמן</li>
              <li>יונתן שמיר</li>
              <li>הגר דולב</li>
            </ul>
          </div>
        </div>
      </section>

    </main>
  );
}
