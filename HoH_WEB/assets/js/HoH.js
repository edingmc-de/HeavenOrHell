var storyContent = ﻿{"inkVersion":19,"root":[["ev",0,100,"rnd","/ev",{"temp=":"rand"},"\n","\n","\n","\n","\n","\n","\n","\n",{"->":"HoH"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"HoH":[[{"#":"IMAGE: assets/img/logo.png"},{"#":"IMAGE: assets/img/menü.png"},["ev",{"^->":"HoH.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Start",{"->":"$r","var":true},null]}],["ev",{"^->":"HoH.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Tutorial",{"->":"$r","var":true},null]}],["ev",{"^->":"HoH.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^Geld Gewinn Maschine",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"HoH.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},{"->":"Start"},{"#f":5}],"c-1":["ev",{"^->":"HoH.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},{"->":"Tutorial"},{"#f":5}],"c-2":["ev",{"^->":"HoH.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},{"->":"randommoney"},{"#f":5}]}],{"#f":1}],"Start":[[{"#":"IMAGE: assets/img/logo.png"},"^Wähle dein bereich!","\n",["ev",{"^->":"Start.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Heaven",{"->":"$r","var":true},null]}],["ev",{"^->":"Start.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Hell",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Start.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},{"->":"Heaven"},{"#f":5}],"c-1":["ev",{"^->":"Start.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},{"->":"Hell"},{"#f":5}]}],{"#f":1}],"Tutorial":[[{"#":"IMAGE: assets/img/tutorial.png"},"^Wilkommen im Tutorial von \"HeavenOrHell\".","\n",["ev",{"^->":"Tutorial.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Weiter ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Tutorial.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->":"W1"},{"#f":5}]}],{"#f":1}],"W1":[["^In diesem Spiel kannst du dein Scenario und Geschichte Selbst entscheiden.","\n",["ev",{"^->":"W1.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"W1.0.c-0","flg":2},{"s":["^Weiter",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"W1.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":"W1.0.2.s"},[{"#n":"$r2"}],"\n",{"->":"W2"},{"#f":5}]}],{"#f":1}],"W2":[["^Es sind Gespräche zu lesen nd du kannst dann entscheiden wie es weiter geht.","\n",["ev",{"^->":"W2.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"W2.0.c-0","flg":2},{"s":["^Weiter",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"W2.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":"W2.0.2.s"},[{"#n":"$r2"}],"\n",{"->":"W3"},{"#f":5}]}],{"#f":1}],"W3":[["^Am Schluß kannst du dann auch den Berreich wechseln wo deine Geschichte Spielt.","\n",["ev",{"^->":"W3.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"W3.0.c-0","flg":2},{"s":["^Weiter",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"W3.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":"W3.0.2.s"},[{"#n":"$r2"}],"\n",{"->":"W4"},{"#f":5}]}],{"#f":1}],"W4":[["^Bist du Bereit??","\n","^Oder das Tutorial noch mal von vorne??","\n",["ev",{"^->":"W4.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"W4.0.c-0","flg":2},{"s":["^Bereit",{"->":"$r","var":true},null]}],["ev",{"^->":"W4.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"W4.0.c-1","flg":2},{"s":["^Noch nicht Bereit",{"->":"$r","var":true},null]}],["ev",{"^->":"W4.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"W4.0.c-2","flg":2},{"s":["^Tutorial Beginnen",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"W4.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":"W4.0.4.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},{"->":"HoH"},{"#f":5}],"c-1":["ev",{"^->":"W4.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":"W4.0.5.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},{"->":"HoH"},{"#f":5}],"c-2":["ev",{"^->":"W4.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":"W4.0.6.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},{"->":"Tutorial"},{"#f":5}]}],{"#f":1}],"Heaven":[[{"#":"IMAGE: assets/img/heaven/Heaven.png"},"^Du hast dich für den Himmel entschieden, bist du dir Sicher dass du den Himmer Spielen willst??","\n",["ev",{"^->":"Heaven.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Ja",{"->":"$r","var":true},null]}],["ev",{"^->":"Heaven.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Nein",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Heaven.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},{"->":"JA1"},{"#f":5}],"c-1":["ev",{"^->":"Heaven.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},{"->":"HoH"},{"#f":5}]}],{"#f":1}],"JA1":[["^Heaven","\n",["ev",{"^->":"JA1.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^LOS!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"JA1.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"Los1"},{"#f":5}]}],{"#f":1}],"Los1":[["^Wilkommen im Himmel, Spieler.","\n",{"#":"IMAGE: assets/img/heaven/gott.jpg"},"^Ich bin ","ev",{"VAR?":"god"},"out","/ev","^.","\n",["ev",{"^->":"Los1.0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Weiter!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Los1.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},{"->":"HI1"},{"#f":5}]}],{"#f":1}],"HI1":[["^Gut, dass du dich für den Himmel entschieden hast!","\n","^Wir können deine Helfe gut gebrauchen!","\n",["ev",{"^->":"HI1.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Weiter!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"HI1.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},{"->":"HI2"},{"#f":5}]}],{"#f":1}],"HI2":[["^Wir stecken gerade mitten im Krieg gegen die Hölle.","\n",["ev",{"^->":"HI2.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^weiter    ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"HI2.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},{"->":"HI3"},{"#f":5}]}],{"#f":1}],"HI3":[["^Kannst du bitte etwas im Shop ausrüstung Kaufen um im Krieg später zu gewinnen??","\n","^Hier hast du 1000 Euro.","\n",["ev",{"^->":"HI3.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^weiter",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"HI3.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},{"->":"HI4"},{"#f":5}]}],{"#f":1}],"HI4":[["^Du kannst dich auch erst umschauen und dann den Krieg beginnen!","\n","^Wir sehen uns Später wieder","\n",["ev",{"^->":"HI4.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Shop",{"->":"$r","var":true},null]}],["ev",{"^->":"HI4.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Umschauen",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"HI4.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},{"->":"ShopHI"},{"#f":5}],"c-1":["ev",{"^->":"HI4.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},{"->":"UmschauenHI"},{"#f":5}]}],{"#f":1}],"ShopHI":[[{"#":"IMAGE: assets/img/heaven/HeavShop.png"},"^Dein Guthaben: ","ev",{"VAR?":"inv_geld"},"out","/ev","^ Euro!","\n",["ev",{"^->":"ShopHI.0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Waffen",{"->":"$r","var":true},null]}],["ev",{"^->":"ShopHI.0.9.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Essen",{"->":"$r","var":true},null]}],["ev",{"^->":"ShopHI.0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^zurück",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"ShopHI.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},{"->":"WaffenHI"},{"#f":5}],"c-1":["ev",{"^->":"ShopHI.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.9.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},{"->":"EssenHI"},{"#f":5}],"c-2":["ev",{"^->":"ShopHI.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},{"->":"HI2"},{"#f":5}]}],{"#f":1}],"WaffenHI":[[{"#":"IMAGE: assets/img/hell/HeavShop.png"},{"#":"IMAGE: assets/img/hell/Waffen.png"},"^Dein Guthaben: ","ev",{"VAR?":"inv_geld"},"out","/ev","^ Euro!","\n","^Mit den Waffen hast du bessere Chancen auf den Sieg!","\n",["ev",{"^->":"WaffenHI.0.11.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Holz Schwert",{"->":"$r","var":true},null]}],["ev",{"^->":"WaffenHI.0.12.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Diamant Schwert",{"->":"$r","var":true},null]}],["ev",{"^->":"WaffenHI.0.13.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^Engel Schwert",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"WaffenHI.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.11.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"inv_geld"},{"VAR?":"shop_price_wooden_sword"},">=","out","/ev","\n","ev",{"VAR?":"inv_geld"},{"VAR?":"shop_price_wooden_sword"},"-",{"VAR=":"inv_geld","re":true},"/ev",{"#f":5}],"c-1":["ev",{"^->":"WaffenHI.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.12.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"inv_geld"},{"VAR?":"shop_price_diamond_sword"},">=","out","/ev","\n","ev",{"VAR?":"inv_geld"},{"VAR?":"shop_price_diamond_sword"},"-",{"VAR=":"inv_geld","re":true},"/ev",{"#f":5}],"c-2":["ev",{"^->":"WaffenHI.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.13.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"inv_geld"},{"VAR?":"shop_price_angel_sword"},">=","out","/ev","\n","ev",{"VAR?":"inv_geld"},{"VAR?":"shop_price_angel_sword"},"-",{"VAR=":"inv_geld","re":true},"/ev",{"#f":5}]}],{"#f":1}],"EssenHI":[[{"#":"IMAGE: assets/img/heaven/HeavShop.png"},{"#":"IMAGE: assets/img/heaven/Essen.png"},"^Dein Guthaben: ","ev",{"VAR?":"inv_geld"},"out","/ev","^ Euro!","\n","^Mit Nahrung kannst du dich heilen!","\n",["ev",{"^->":"EssenHI.0.11.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Fleisch",{"->":"$r","var":true},null]}],["ev",{"^->":"EssenHI.0.12.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Kafee",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"EssenHI.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.11.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"inv_geld"},{"VAR?":"shop_price_meat"},">=","out","/ev","\n","ev",{"VAR?":"inv_geld"},{"VAR?":"shop_price_meat"},"-",{"VAR=":"inv_geld","re":true},"/ev",{"#f":5}],"c-1":["ev",{"^->":"EssenHI.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.12.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"inv_geld"},{"VAR?":"shop_price_cofee"},">=","out","/ev","\n","ev",{"VAR?":"inv_geld"},{"VAR?":"shop_price_cofee"},"-",{"VAR=":"inv_geld","re":true},"/ev",{"#f":5}]}],{"#f":1}],"UmschauenHI":[[["ev",{"^->":"UmschauenHI.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Zu Gott",{"->":"$r","var":true},null]}],["ev",{"^->":"UmschauenHI.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Mit den Engeln sprechen",{"->":"$r","var":true},null]}],["ev",{"^->":"UmschauenHI.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^Team Bilden",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"UmschauenHI.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"#f":5}],"c-1":["ev",{"^->":"UmschauenHI.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",{"#f":5}],"c-2":["ev",{"^->":"UmschauenHI.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"#f":5}]}],{"#f":1}],"Hell":[[{"#":"IMAGE: assets/img/hell/Hell.png"},"^Du hast dich für die Hölle entschieden, bist du dir Sicher dass du in der Hölle Spielen willst??","\n",["ev",{"^->":"Hell.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Ja",{"->":"$r","var":true},null]}],["ev",{"^->":"Hell.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Nein",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Hell.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},{"->":"JA2"},{"#f":5}],"c-1":["ev",{"^->":"Hell.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},{"->":"HoH"},{"#f":5}]}],{"#f":1}],"JA2":[["^Hell","\n",["ev",{"^->":"JA2.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^LOS!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"JA2.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"Los2"},{"#f":5}]}],{"#f":1}],"Los2":[["^Wilkommen, in der Hölle.","\n",{"#":"IMAGE: assets/img/hell/lucifer.jpg"},"^Ich bin ","ev",{"VAR?":"devil"},"out","/ev","^.","\n",["ev",{"^->":"Los2.0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Weiter!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Los2.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},{"->":"HE1"},{"#f":5}]}],{"#f":1}],"HE1":[["^Gut, dass du dich für die Hölle entschieden hast!","\n","^Wir können deine Helfe gut gebrauchen!","\n",["ev",{"^->":"HE1.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Weiter!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"HE1.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},{"->":"HE2"},{"#f":5}]}],{"#f":1}],"HE2":[["^Wir stecken gerade mitten im Krieg gegen den Himmel.","\n","^Kannst du bitte etwas im Shop ausrüstung Kaufen um im Krieg später zu gewinnen??","\n",["ev",{"^->":"HE2.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Weiter!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"HE2.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},{"->":"HE3"},{"#f":5}]}],{"#f":1}],"HE3":[["^Hier hast du 1000 Euro.","\n","^Du kannst dich auch erst umschauen und dann den Krieg beginnen!","\n","^Wir sehen uns Später wieder","\n",["ev",{"^->":"HE3.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Shop",{"->":"$r","var":true},null]}],["ev",{"^->":"HE3.0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Umschauen",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"HE3.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},{"->":"ShopHE"},{"#f":5}],"c-1":["ev",{"^->":"HE3.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},{"->":"UmschauenHE"},{"#f":5}]}],{"#f":1}],"ShopHE":[[{"#":"IMAGE: assets/img/hell/HellShop.png"},"^Dein Guthaben: ","ev",{"VAR?":"inv_geld"},"out","/ev","^ Euro!","\n",["ev",{"^->":"ShopHE.0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Waffen",{"->":"$r","var":true},null]}],["ev",{"^->":"ShopHE.0.9.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Essen",{"->":"$r","var":true},null]}],["ev",{"^->":"ShopHE.0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^zurück",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"ShopHE.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},{"->":"Waffen"},{"#f":5}],"c-1":["ev",{"^->":"ShopHE.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.9.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},{"->":"Essen"},{"#f":5}],"c-2":["ev",{"^->":"ShopHE.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},{"->":"HE3"},{"#f":5}]}],{"#f":1}],"Waffen":[[{"#":"IMAGE: assets/img/hell/HellShop.png"},{"#":"IMAGE: assets/img/hell/Waffen.png"},"^Dein Guthaben: ","ev",{"VAR?":"inv_geld"},"out","/ev","^ Euro!","\n","^Mit den Waffen hast du bessere Chancen auf den Sieg!","\n",["ev",{"^->":"Waffen.0.11.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Holz Schwert",{"->":"$r","var":true},null]}],["ev",{"^->":"Waffen.0.12.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Diamant Schwert",{"->":"$r","var":true},null]}],["ev",{"^->":"Waffen.0.13.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^Engel Schwert",{"->":"$r","var":true},null]}],["ev",{"^->":"Waffen.0.14.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":2},{"s":["^Zurück",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Waffen.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.11.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"inv_geld"},{"VAR?":"shop_price_wooden_sword"},">=","out","/ev","\n","ev",{"VAR?":"inv_geld"},{"VAR?":"shop_price_wooden_sword"},"-",{"VAR=":"inv_geld","re":true},"/ev",{"#f":5}],"c-1":["ev",{"^->":"Waffen.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.12.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"inv_geld"},{"VAR?":"shop_price_diamond_sword"},">=","out","/ev","\n","ev",{"VAR?":"inv_geld"},{"VAR?":"shop_price_diamond_sword"},"-",{"VAR=":"inv_geld","re":true},"/ev",{"#f":5}],"c-2":["ev",{"^->":"Waffen.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.13.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"inv_geld"},{"VAR?":"shop_price_deamon_sword"},">=","out","/ev","\n","ev",{"VAR?":"inv_geld"},{"VAR?":"shop_price_deamon_sword"},"-",{"VAR=":"inv_geld","re":true},"/ev",{"#f":5}],"c-3":["ev",{"^->":"Waffen.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.14.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},{"->":"ShopHE"},{"#f":5}]}],{"#f":1}],"Essen":[[{"#":"IMAGE: assets/img/hell/HellShop.png"},{"#":"IMAGE: assets/img/hell/Essen.png"},"^Dein Guthaben: ","ev",{"VAR?":"inv_geld"},"out","/ev","^ Euro!","\n","^Mit Nahrung kannst du dich im Kampf heilen!","\n",["ev",{"^->":"Essen.0.11.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Fleisch",{"->":"$r","var":true},null]}],["ev",{"^->":"Essen.0.12.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Kafee",{"->":"$r","var":true},null]}],["ev",{"^->":"Essen.0.13.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^Zurück",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Essen.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.11.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"inv_geld"},{"VAR?":"shop_price_meat"},">=","out","/ev","\n","ev",{"VAR?":"inv_geld"},{"VAR?":"shop_price_meat"},"-",{"VAR=":"inv_geld","re":true},"/ev",{"#f":5}],"c-1":["ev",{"^->":"Essen.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.12.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"inv_geld"},{"VAR?":"shop_price_cofee"},">=","out","/ev","\n","ev",{"VAR?":"inv_geld"},{"VAR?":"shop_price_cofee"},"-",{"VAR=":"inv_geld","re":true},"/ev",{"#f":5}],"c-2":["ev",{"^->":"Essen.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.13.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},{"->":"ShopHE"},{"#f":5}]}],{"#f":1}],"UmschauenHE":[[["ev",{"^->":"UmschauenHE.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Zu Lucifer",{"->":"$r","var":true},null]}],["ev",{"^->":"UmschauenHE.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Mit Deamonen sprechen",{"->":"$r","var":true},null]}],["ev",{"^->":"UmschauenHE.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^Team Bilden",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"UmschauenHE.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"#f":5}],"c-1":["ev",{"^->":"UmschauenHE.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",{"#f":5}],"c-2":["ev",{"^->":"UmschauenHE.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"#f":5}]}],{"#f":1}],"randommoney":[[{"#":"IMAGE: assets/img/logo.png"},{"#":"IMAGE: assets/img/random/rm.png"},["ev",{"^->":"randommoney.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Start",{"->":"$r","var":true},null]}],["ev",{"^->":"randommoney.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Dein aktueller Kontostand",{"->":"$r","var":true},null]}],["ev",{"^->":"randommoney.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^Hauptmenü",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"randommoney.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},{"->":"Random"},{"#f":5}],"c-1":["ev",{"^->":"randommoney.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},{"->":"Kontostand"},{"#f":5}],"c-2":["ev",{"^->":"randommoney.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},{"->":"HoH"},{"#f":5}]}],{"#f":1}],"Random":[[{"#":"IMAGE: assets/img/logo.png"},{"#":"IMAGE: assets/img/random/Random.png"},"^Du hast ","ev",{"VAR?":"rand"},"out","/ev","^ Euro gewonnen!","\n","ev",{"VAR?":"inv_geld"},{"VAR?":"rand"},"+",{"VAR=":"inv_geld","re":true},"/ev",["ev",{"^->":"Random.0.15.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Nochmal",{"->":"$r","var":true},null]}],["ev",{"^->":"Random.0.16.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Zurück",{"->":"$r","var":true},null]}],["ev",{"^->":"Random.0.17.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^Kontostand",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Random.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.15.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},{"->":"Random"},{"#f":5}],"c-1":["ev",{"^->":"Random.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.16.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},{"->":"HoH"},{"#f":5}],"c-2":["ev",{"^->":"Random.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.17.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},{"->":"Kontostand"},{"#f":5}]}],{"#f":1}],"Kontostand":[[{"#":"IMAGE: assets/img/logo.png"},{"#":"IMAGE: assets/img/random/Kontostand.png"},"^Dein Guthaben beträgt: ","ev",{"VAR?":"inv_geld"},"out","/ev","^ Euro.","\n",["ev",{"^->":"Kontostand.0.9.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Zurück",{"->":"$r","var":true},null]}],["ev",{"^->":"Kontostand.0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Hauptmenü",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Kontostand.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.9.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},{"->":"randommoney"},{"#f":5}],"c-1":["ev",{"^->":"Kontostand.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},{"->":"HoH"},{"#f":5}]}],{"#f":1}],"Inventar":[{"#":"IMAGE: assets/img/inventar.png"},{"#f":1}],"global decl":["ev","str","^Lucifer","/str",{"VAR=":"devil"},"str","^Gott","/str",{"VAR=":"god"},100,{"VAR=":"live"},1000,{"VAR=":"inv_geld"},0,{"VAR=":"inv_weapons"},0,{"VAR=":"inv_eat"},2,{"VAR=":"shop_price_meat"},3,{"VAR=":"shop_price_cofee"},20,{"VAR=":"shop_price_wooden_sword"},40,{"VAR=":"shop_price_diamond_sword"},100,{"VAR=":"shop_price_deamon_sword"},100,{"VAR=":"shop_price_angel_sword"},"/ev","end",null],"#f":1}],"listDefs":{}};