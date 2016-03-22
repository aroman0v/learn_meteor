Template.PictureS.helpers({
    pictures: function (limit) {
var array = [];
        for(var i = 0; i < limit; i++) {
            array.push({
                _id: i + 1,
                src: 'http://lorempixel.com/' + _.random(250, 250)
                + '/' + _.random(250, 400),
                title: 'Picture #' + (i + 1)

            });

        }
        return array;

    }
});
