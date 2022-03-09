async function predecir() {

    const imageElement = document.getElementById('canvas');
    let tensorImg = tf.browser.fromPixels(imageElement).resizeNearestNeighbor([150, 150]).toFloat().expandDims();
    predecir = await model.predict(tensorImg).data();

    if (prediccion[0] <= 0.5) {

        alert("You uploaded a cat!");

    } else {

        alert("You uploaded a dog!");

    }

}