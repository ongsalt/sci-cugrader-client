import { getCsrfToken } from "$lib/auth";

export function upload() {

}

export function download(questionId: number, t: number) {
    // TODO: HOW
    fetch(`${process.env.REACT_APP_HOST}/glob/download`, {
        method: 'POST',
        credentials: "include",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
            "X-CSRF-TOKEN": getCsrfToken()
        },
        body: JSON.stringify({ fileRequest: `${t}_0_${questionId}` })
    })
        .then(response => response.json())
        .then(data => {
            if (!data.success) {
                return
            }
            // Decode base64-encoded file content
            const decodedFileContent = atob(data.fileContent);

            // Convert decoded content to a Uint8Array
            const arrayBuffer = new Uint8Array(decodedFileContent.length);
            for (let i = 0; i < decodedFileContent.length; i++) {
                arrayBuffer[i] = decodedFileContent.charCodeAt(i);
            }

            const jk = Buffer.from(data.fileContent, 'base64')

            // Create a Blob from the array buffer
            const blob = new Blob([arrayBuffer], { type: data.fileType });

            // Create a temporary URL to the blob
            const url = window.URL.createObjectURL(blob);

            // Create a link element to trigger the download
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = data.downloadFilename;
            document.body.appendChild(a);
            a.click();

            // Clean up by revoking the object URL
            window.URL.revokeObjectURL(url);
        })
        .catch(error => console.error('Error:', error));

}