angular.module("CounterApp", [])
    .controller("CounterController", function($scope) {


        function shuffle(array) {
              var currentIndex = array.length, temporaryValue, randomIndex;

              // While there remain elements to shuffle...
              while (0 !== currentIndex) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
              }

              return array;
        }

        $scope.estado = " ";
        $scope.counter = 0;
        $scope.frases = [['"Es mucho más gratificante comerse un cerdito a la parrilla que tomar Viagra."' ,1],[' "Los aires acondicionados fueron parte de este cóctel explosivo y siniestro que inventó el Gobierno anterior."' , 0],[' "Uno no puede andar día a día cantando falta envido sin nada."' , 0],[' "Me gusta el arroz, pero me constipa un poco."' ,1],['"si no te aburre una sesión en el congreso, sos un anormal."' , 0],['"Cuando te vas muy a la izquierda aparecés por el otro lado, porque la Tierra es redonda."' ,1],['"Cuando tenés que pagar el dulce de batata, no hay ideología."' ,1],['"Si yo les decía a ustedes hace un año lo que iba a hacer y todo esto que está sucediendo, seguramente iban a votar mayoritariamente por encerrarme en el manicomio. "' , 0],['"vengo de una familia machista, alli una mujer no tiene otro destino que el de estar educando a sus hijos."', 0],['"toma la foto con flash, porque si no, no salen los negros."' , 0],['"A todas les gustan los piropos, por más que te digan alguna groseria como: ¡que lindo culo tenés! Pero está todo bien."' , 0],[' "La verdad, me siento un poco Napoleón."' ,1],[' "Solo hay que tenerle temor a Dios ... y a mi un poquito."',1],[' "Lo que tenemos que hacer es bajar los costos. Y los salarios con un costo más."', 0],[' "Debo ser la reencarnación de un gran arquitecto egipcio porque amo construir."',1],[' "(la homosexualidad) es una enfermedad, no es una persona ciento por ciento sana"' , 0],[' "Carlos Menem fue un reconstructor del país."' , 0],[' "El mejor intendente que tuvo la Ciudad fue Cacciatore (el intendente durante la dictaruda de videla)."' , 0],[' "(ser cartonero) es un negocio millonario."' , 0],['"Este es un negocio millonario y los cartoneros tienen una actitud delictiva porque se roban la basura."',0],[' "En quimica nunca pude aprenderme más alla del hache dos cero del agua."' ,1],[' "Por qué le mentís a la gente? (...) No vamos a devaluar, ni ajustar, ni sacar los subsidios. No tenemos previsto tarifazos. No vamos a echar a nadie de su trabajo!."', 0],[' "(Kirchner) está allá arriba, con el Arsat-1 y el Arsat-2. Él está ahí, como una suerte de barrilete cósmico."',1],[' "La inflación es como una borrachera que provoca cierto placer."' , 0],[' "Soy catador profesional de garrapiñada."' , 0],[' "(la salud) me está pasando factura por mi exceso de preocupación por la gente."' , 0],[' "Si están en sus casas en remera y patas, están consumiendo energía de más."' , 0],[' "Si fuese genia haria desaparecer a algunos."' ,1],[' "Los diabéticos tienen alto poder adquisitivo, porque son sedentarios."' ,1]];


        $scope.jugar = function(){
            $scope.estado = " ";
            $scope.counter = 0;
            document.getElementById("jugarOtraVez").style.display = "none";
            $scope.frases = shuffle($scope.frases);
            console.log($scope.frases);
        };

        iterar = function(){
            $scope.estado = " ";
            $scope.counter++;
            if ($scope.counter == $scope.frases.length) {
                    ganar()
                }
        };
        perder = function() {
            $scope.estado = "Perdiste perdedor :(";
            document.getElementById("jugarOtraVez").style.display = "block";
        };
        ganar = function(){
            $scope.estado = "Wiiii ganaste";
            document.getElementById("jugarOtraVez").style.display = "block";
        };
        $scope.UNO = function() {
            if ($scope.estado == " "){
                if ($scope.frases[$scope.counter][1] == 1) {
                    iterar();
                }  
                else{
                    perder();
                }
            }
        };
        $scope.CERO = function() {
            if ($scope.estado == " "){
                if ($scope.frases[$scope.counter][1] == 0) {
                    iterar();
                }  
                else{
                    perder();
                }
            }
        };
})