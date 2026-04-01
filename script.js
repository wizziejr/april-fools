    // List of questions with the requested numbers removed
        const questions = [
            "Do you love me?", // Index 0
            "Are you sure you don't love me?", // 1
            "Really really sure?", // 2
            "Are you absolutely positive?", // 3
            "Please think again!", // 4
            "Don't break my heart!", // 5
            "Look into your heart!", // 6 (Old 10)
            "Think of all our good memories!", // 7 (Old 11)
            "Are you completely heartless?", // 8 (Old 12)
            "Even just a tiny bit?", // 9 (Old 13)
            "Is there even a 1% chance?", // 10 (Old 14)
            "Okay, seriously... please?", // 11 (Old 17)
            "I'm not giving up!", // 12 (Old 18)
            "I will keep asking!", // 13 (Old 19)
            "Pretty please?", // 14 (Old 20)
            "Why are you doing this?", // 15 (Old 21)
            "Is it because of something I said?", // 16 (Old 23)
            "I can change!", // 17 (Old 24)
            "I'm begging!", // 18 (Old 26)
            "The green button looks better, click it!", // 19 (Old 27)
            "Why do you hate the green button?", // 20 (Old 32)
            "Do you have something against happiness?", // 21 (Old 33)
            "Think of the puppies!", // 22 (Old 34)
            "You're making a kitten cry somewhere!", // 23 (Old 35)
            "I'll write a poem!", // 24 (Old 36)
            "Roses are red, violets are blue, please say yes!", // 25 (Old 37)
            "I'm running out of things to say!", // 26 (Old 38)
            "But I won't stop!", // 27 (Old 40)
            "I have all day!", // 28 (Old 41)
            "Do you have all day?", // 29 (Old 42)
            "Let's just end this peacefully!", // 30 (Old 43)
            "Clicking yes is so easy!", // 31 (Old 44)
            "Just a slight mouse movement...", // 32 (Old 45)
            "You're so stubborn!", // 33 (Old 49)
            "I admire your persistence, but...", // 34 (Old 50)
            "Come on!", // 35 (Old 51)
            "Be nice!", // 36 (Old 52)
            "It's a beautiful day to say yes!", // 37 (Old 53)
            "Why so cold?", // 38 (Old 54)
            "You have ice in your veins!", // 39 (Old 55)
            "Are you a robot?", // 40 (Old 56)
            "Prove you're human and have feelings!", // 41 (Old 57)
            "Error 404: Love not found!", // 42 (Old 58)
            "Rebooting your feelings...", // 43 (Old 59)
            "Please, I'm desperate!", // 44 (Old 60)
            "I'll let you pick the movie next time!", // 45 (Old 61)
            "I'll even watch that show you like!", // 46 (Old 62)
            "I'll eat my vegetables!", // 47 (Old 63)
            "I'll clean my room!", // 48 (Old 64)
            "Just say it!", // 49 (Old 65)
            "It's just three little words!", // 50 (Old 66)
            "Or one little click!", // 51 (Old 67)
            "You know you want to!", // 52 (Old 68)
            "Stop fighting it!", // 53 (Old 69)
            "Embrace the love!", // 54 (Old 70)
            "Don't be a Grinch!", // 55 (Old 71)
            "Even villains have a heart!", // 56 (Old 72)
            "I believe in you!", // 57 (Old 73)
            "You can do this!", // 58 (Old 74)
            "Take a deep breath...", // 59 (Old 75)
            "And click yes!", // 60 (Old 76)
            "No? Still no?", // 61 (Old 77)
            "You're tough!", // 62 (Old 78)
            "A tough nut to crack!", // 63 (Old 79)
            "Okay, my finger is getting tired...", // 64 (Old 80)
            "But my love keeps me going!", // 65 (Old 81)
            "Are we there yet?", // 66 (Old 82)
            "Almost at 100 questions...", // 67 (Old 83)
            "This is exhausting!", // 68 (Old 84)
            "For both of us!", // 69 (Old 85)
            "Let's make a deal!", // 70 (Old 86)
            "You click yes, I stop asking!", // 71 (Old 87)
            "Sounds fair, right?", // 72 (Old 88)
            "Going once...", // 73 (Old 89)
            "Going twice...", // 74 (Old 90)
            "Please say yes!", // 75 (Old 91)
            "Is that a yes I see?", // 76 (Old 92)
            "Wait, did you mean to hit no?", // 77 (Old 93)
            "Surely you meant yes!", // 78 (Old 94)
            "I'm still waiting!", // 79 (Old 95)
            "Patience is a virtue!", // 80 (Old 96)
            "Still here!", // 81 (Old 97)
            "Don't leave me hanging!", // 82 (Old 98)
            "My heart is on the line!", // 83 (Old 99)
            "Just a tiny click!", // 84
            "Think of the future!", // 85
            "Think of the joy!", // 86
            "Think of the laughter!", // 87
            "We could be so happy!", // 88
            "Why the resistance?", // 89
            "I'll be your favorite person!", // 90
            "You're the best, you know?", // 91
            "Please don't say no again!", // 92
            "Just click Yes, I promise it's worth it!", // 93
            "Are we having fun yet?", // 94
            "I know you're smiling!", // 95
            "You can't hide it!", // 96
            "Almost at the finish line!", // 97
            "Last few chances...", // 98
            "One more for the road?", // 99
            "Question 100: Are you finally ready to say you love me?" // 100
        ];

        let currentIndex = 0;

        const questionText = document.getElementById("questionText");
        const yesBtn = document.getElementById("yesBtn");
        const noBtn = document.getElementById("noBtn");
        const buttonGroup = document.getElementById("buttonGroup");
        const mainEmoji = document.getElementById("mainEmoji");

        // Logic for YES button
        yesBtn.addEventListener("click", () => {
            if (currentIndex === 0) {
                // First question success
                showSuccess();
            } else {
                // They are answering "Yes" to a "Are you sure you DON'T" question.
                // Move to the next annoying question.
                currentIndex++;
                if (currentIndex >= questions.length) {
                    currentIndex = questions.length - 1;
                }
                updateQuestion();
            }
        });

        // Logic for NO button
        noBtn.addEventListener("click", () => {
            if (currentIndex === 0) {
                // First time clicking "No" -> Starts the begging loop
                currentIndex = 1;
                updateQuestion();
            } else {
                // Answering "No" to a pleading question means they DO love you!
                // Logic: "Are you sure you don't love me?" -> "No" (means I DO love you)
                currentIndex = 0;
                updateQuestion();
            }
        });

        function updateQuestion() {
            questionText.innerText = questions[currentIndex];
        }

        function showSuccess() {
            buttonGroup.style.display = "none";
            questionText.style.fontSize = "32px";
            questionText.style.fontWeight = "bold";
            questionText.innerHTML = "I love you too! <br> Happy April Fools! 💖";
            mainEmoji.innerHTML = "💖";
        }