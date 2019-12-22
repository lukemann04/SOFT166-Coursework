function setLightData(id, hue, state, bri, sat)
{
    let Data = {};
    if (hue != null)
    {
        Data.hue = hue;
    }
    if (state != null)
    {
        Data.on = state;
    }
    if (bri != null)
    {
        Data.bri = bri;
    }
    if (sat != null)
    {
        Data.sat = sat;
    }
    return  Data;

}

function lightSelected(id, hue, state, bri, sat) {
    $.ajax({
        url: "http://192.168.0.50/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/" + id + "/state",
        type: "PUT",
        timeout: 1000,
        data: JSON.stringify(setLightData(id, hue, state, bri, sat))
    });
}

function setLights(id, hue, state, bri, sat) {
    $.ajax({
        url: "http://192.168.0.50/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/" + id + "/state",
        type: "PUT",
        timeout: 1000,
        data: JSON.stringify(setLightData(id, hue, state, bri, sat))
    });
}