const GeoTIFF = require('geotiff');

async function readGeoTIFF() {
    const tiff = await GeoTIFF.fromFile('your_geotiff_file.tif');
    const image = await tiff.getImage(); // Get the first image
    // Use image for processing or reading

    // Close the GeoTIFF file
    await tiff.close();
}
